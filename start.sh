until node main.js >> bot.log; do
    echo "Jason has crashed with exit code $?. Reloading..." >&2
    sleep 1
done