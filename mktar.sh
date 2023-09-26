ls | grep -vE "*.sh|node_modules|*.tgz" | xargs tar -cvzf showcase.tgz
