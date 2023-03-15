import * as assert from 'assert';
import { expect } from 'chai';
import {addDirectedEdge, addDirectedEdges, depthFirstSearch} from '../depth_first_functional.js'

describe('Depth First Simple', function () {
  describe('Count', function () {
    it('should count the depths of the graph', function () {
      let graph = new Map()
      const numberOfVertices = 5
      addDirectedEdges(graph, [[0, 1, 4],
                               [0, 2, 5],
                               [1, 2, -2],
                               [1, 3, 6],
                               [2, 3, 1],
                               [2, 2, 10],
      ])

      const count_0 = depthFirstSearch(graph, 0, numberOfVertices)
      assert.equal(count_0, 4)
      const count_1 = depthFirstSearch(graph, 1, numberOfVertices)
      assert.equal(count_1, 3)
    });
  })
});
describe('Depth First Moderate, 7, back edges', function () {
  describe('Count', function () {
    it('should count the depths of the graph', function () {
      let graph = new Map()
      const numberOfVertices = 5
      addDirectedEdges(graph, [[0, 1, 4],
                               [0, 2, 5],
                               [1, 2, -2],
                               [1, 3, 6],
                               [2, 3, 1],
                               [2, 2, 10],
                               [3, 4, 10],
                               [4, 5, 10],
                               [5, 6, 10],
                               [3, 6, 10],
                               [6, 1, 10],
                               [6, 3, 10],
      ])

      const count_0 = depthFirstSearch(graph, 5, numberOfVertices)
      assert.equal(count_0, 6)
      const count_1 = depthFirstSearch(graph, 0, numberOfVertices)
      assert.equal(count_1, 7)
    });
  })
});

