# url=$1
url="$*"
fname=${url##*/}
sname=${fname%%\?*}
name=${sname%%\#*}

# echo $name !!!

curl -o "$name" "$url"
