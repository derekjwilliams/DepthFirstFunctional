# DepthFirstFunctional
Simple depth first graph algorithm

## Tests

### Simple graph

Graph for `Depth First Simple` tests
```mermaid
  graph TD;
      v0--cost:4-->v1;
      v1--cost:-2-->v2;
      v1--cost:6-->v3;
      v0--cost:5-->v2;
      v2--cost:1-->v3;
      v2--cost:10-->v2;
      v4;
```

ASCII Art (sucks)
```
    (v0)
    /  \
  4/    \5
  /      \
*        *
(v1)----*(v2)----|(v4)
  \  -2  / *_____|
  6\    /1    10
    \  /
     **
    (v3)
```     

### More Complex 7 Vertex Graph

Graph for `Depth First Moderate` tests
```mermaid
  graph TD;
v0--cost:4-->v1;
v1--cost:-2-->v2;
v1--cost:6-->v3;
v0--cost:5-->v2;
v2--cost:1-->v3;
v2--cost:10-->v2;
v3--cost:10-->v4;
v4--cost:10-->v5;
v5--cost:10-->v6;
v3--cost:10-->v6;
v6--cost:10-->v1;
v6--cost:10-->v3;
```


## Future Work

Support loading a graph from a JSON representation, for example [GraphSON](https://tinkerpop.apache.org/docs/3.4.1/dev/io/).  GraphML is another option.

Support loading a graph from a (relay based) GraphQL response.

Support loading a graph from a Mermaid specfication


