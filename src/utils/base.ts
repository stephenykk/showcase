
export function isPrimative(val: any) {
  const isObject = ['Object', 'Array'].includes(
    Object.prototype.toString.call(val).slice(8, -1)
  )
  return !isObject
}

export function camelCase(str: string) {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
}

export const isPlainObject = (val: any) => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Object'
}

export const pickData = (data: Obj, keys: Array<string>, defVal = '') => {
  return keys.reduce((result, key) => {
    result[key] = data[key] === undefined ? defVal : data[key]
    return result
  }, {} as Obj)
}

export const delArrayItems = (list: string[] = [], vals: string | string[] = []) => {
  if (!Array.isArray(vals)) {
    vals = [vals]
  }
  vals.forEach(val => {
    const index = list.findIndex(el => el === val)
    if (index >= 0) {
      list.splice(index, 1)
    }
  })
  return list
}

export const uniqList = (list: any[] = [], idKey = '') => {
  if (list.every(el => !isPlainObject(el))) {
    return Array.from(new Set(list))
  }

  const idList: any[] = []
  const result: any[] = []
  list.forEach(el => {
    if (!idList.includes(el[idKey])) {
      idList.push(el[idKey])
      result.push(el)
    }
  })
  return result
}

export const renameKeys = (obj: Obj = {}, keyMapOrFn: Obj | ((key: string, val: any) => string)) => {
  const result = {} as Obj
  Object.keys(obj).forEach((key) => {
    let newKey = key
    if (typeof keyMapOrFn === 'function') {
      newKey = keyMapOrFn(key, obj[key]) || key
    } else {
      newKey = keyMapOrFn[key] || key
    }
    result[newKey] = obj[key]
  })

  return result
}

export const sleep = (seconds = 1) => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

export function setDefaults<T extends Obj>(data: T, defaultData: Obj): T {
  Object.keys(defaultData).forEach((key) => {
    const value = data[key]
    if (value == undefined) {
      // @ts-ignore
      data[key] = defaultData[key]
    }
  })

  return data
}


export function transToTree(nodes: any[], rootId: string | number, filter: Fn = () => true, nodeCallback: Fn = val => val, idKey: string = 'category_id', pidKey: string = 'parent_id') {
  const root = nodes.find(node => node[idKey] === rootId)
  if (!root) {
    console.warn('not found root node:', root, nodes)
    return {}
  }

  function setupChildren(rootNode: Obj, nodes: any[]) {
    let children = nodes.filter(node => {
      const isChild = node[pidKey] && node[pidKey] === rootNode[idKey] && filter(node)
      if (isChild) {
        nodeCallback(node)
      }
      return isChild
    })

    children = uniqList(children, idKey)

    if (children.length) {
      rootNode.children = children
      children.forEach((child: any) => setupChildren(child, nodes))
    }
  }

  setupChildren(root, nodes)

  return root;
}

export function transToList(tree: Obj) {
  function flatten(rootNode: Obj, nodes = [] as any[]) {
    nodes.push(rootNode)
    if (rootNode.children) {
      rootNode.children.forEach((childRoot: Obj) => {
        flatten(childRoot, nodes)
      })
    }

    return nodes

  }

  return flatten(tree)
}



export function deepCopy(val: Obj, walkedMap = new Map()): Obj {
  const isPlainObj = Object.prototype.toString.call(val) === '[object Object]'
  const isArray = Array.isArray(val)
  if (!isPlainObj && !isArray) {
    return val
  } else if (isArray) {
    return val.map((el) => deepCopy(el, walkedMap))
  }
  // 避免循环引用 导致递归无法终止
  const cached = walkedMap.get(val)
  if (cached) {
    return cached
  }


  const cloned = Object.fromEntries(Object.entries(val).map(([ekey, evalue]) => ([ekey, deepCopy(evalue, walkedMap)])))
  walkedMap.set(val, cloned)

  return cloned
}

export function findTreeNodeByTitle(tree: Obj, title: string, titleKey = 'title') {
  const nodes = transToList(tree)
  const target = nodes.find(node => {
    return String(node[titleKey] ?? '').toLowerCase().includes(title.toLowerCase())
  })

  return target
}

export function findTreeNodeById(tree: Obj, id: string, idKey = 'category_id') {
  const nodes = transToList(tree)
  const target = nodes.find(node => {
    return node[idKey] === id
  })

  return target
}