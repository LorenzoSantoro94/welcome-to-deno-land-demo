ITERATIONS=1000
for ((i=0; i < $ITERATIONS; i++)); do
	curl -s localhost:3000 > /dev/null
done