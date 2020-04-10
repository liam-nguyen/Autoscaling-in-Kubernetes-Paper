for var in {1..10000}
do 
    echo $var
    curl http://192.168.64.3:32323/PI/100000000
    echo "\n"
done