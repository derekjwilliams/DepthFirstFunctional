import * as assert from 'assert';
import { expect } from 'chai';
import {addDirectedEdge, depthFirstSearch} from '../depth_first_functional.js'

describe('Depth First ', function () {
  describe('Count', function () {
    it('should count the depth of the graph', function () {
      let graph = new Map();
      const numberOfVertices = 5;
      addDirectedEdge(graph, 0, 1, 4);   // vertex 0 to vertex 1 with cost of 4
      addDirectedEdge(graph, 0, 2, 5);   // vertex 0 to vertex 2 with cost of 5
      addDirectedEdge(graph, 1, 2, -2);  // vertex 1 to vertex 2 with cost of -2
      addDirectedEdge(graph, 1, 3, 6);   // vertex 1 to vertex 3 with cost of 6
      addDirectedEdge(graph, 2, 3, 1);   // vertex 2 to vertex 3 with cost of 6
      addDirectedEdge(graph, 2, 2, 10);  // vertex 2 to vertex 2 with cost of 10, this is an edge that points from vertex 2 to vertex 2

      const count = depthFirstSearch(graph, 0, numberOfVertices)
      assert.equal(count, 4);
    });
  })
});

