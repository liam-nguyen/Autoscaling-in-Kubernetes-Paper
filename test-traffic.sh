for var in {1..10000}
do 
    echo $var
    curl http://192.168.64.3:32323/
    # sleep 1 # sleep for 1 second
    echo "\n"
done