# clown-registry
Registry Of Clowns

Configure postgres database
```
docker-compose run clown-registry npm run migrate
```

Run locally with docker-compose

```
docker-compose up
```

From another terminal run tests
```
docker-compose run clown-registry npm test
```

Add new clown to registry

```
curl -w "\n" \
       -X PUT \
       -d "clownName=Chuckles&shoeSize=ZigZag&noseColour=orange&bowTie=false" \
       localhost:3000/clowns
```

List all clowns in registry

```
curl -w "\n" localhost:3000/clowns/all | jq -r
```

Build docker image

```
docker build -t clown-registry .
```
