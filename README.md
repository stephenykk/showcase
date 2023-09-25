# DropshipZone showcase

## 技术栈

-   Vite
-   React
-   TS
-   React-router
-   Redux

## 技术细节

-   配置 `axios` 拦截器，给请求提供默认参数，未登录异常跳登录页
-   封装 `createLogger` 工厂函数，实现日志分级，生产环境只输出 `error` 日志
-   创建 `scss` 工具函数 `rem()`，把 `px` 转换 `rem` 单位大小
-   增加公共组件和工具方法 `toast` 和 `loading`
-   用 `vite-plugin-svg-icons`插件集中管理`svg` 图标，封装图标组件 `SvgIcon`
-   路由懒加载，`Suspends` 组件全局 `loading` 提示
-   封装 `useAction`，配合 `useSelector` 可以非常方便的读写 redux, 修改全局状态的操作, 支持 `AsyncThunk`
-   修复 `axios` 发送 GET 请求会自动删除 `content-type` header 导致接口失败的问题
-   获取 category 数据需要 token, 首页的 `menu` 菜单固定展示 `CATEGORIES` 所以会先引导用户去登录
-   导出 `RootState`, 用 useSelector 获取子模块状态时，能得到类型推导
-   用 `shell` 脚本，批量下载字体文件，解决字体下载 `cors` 报错的问题
-   获取分类商品接口不支持 `limit` 参数，切换分页大小，只能模拟点击交互，数据加载未实现
-   获取每个二级分类的商品数，无接口批量获取分类的商品总数，只能通过循环调用实现，避免重发每分钟大于 60 次 API 调用的限制，低频率递归调用

## 实现功能

-   首页 (公共头部的商品分类下拉菜单组件)
-   登录页 (模拟接口失败，跳登录鉴权)
-   列表页 (响应式布局/子分类递归获取商品总数，选中或取消选中查看子分类商品/商品列表支持分页、排序、过滤等操作)
-   交互流程 (首页 - 跳登录页 - 返回首页 - 选择分类 - 跳列表页)

## 开发

```shell
npm i -g pnpm
pnpm i # 安装依赖
pnpm dev # 启动服务
```

## 预览

-   本地预览

```shell
pnpm preview
```

-   GithubPage 预览
    [预览地址](https://stephenykk.github.io/showcase/)

    **注意问题:**

    -   接口调用触发了 `preflight` 预检请求, 接口没有处理 `OPTIONS` 请求方法，导致 CORS 报错

## 部署

```shell
pnpm build
git commit -m "new deploy assets"
git pull && git push
```
