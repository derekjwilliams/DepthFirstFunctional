// perform a depth first search using adjacency list input and vertex to find
// see https://youtu.be/09_LlHjoEiY?t=1400s
// github for the tutorial https://github.com/williamfiset/algorithms

/* simple JS implementation first, with functional stack implementation */
import { stackPeek, stackPop, stackPush, stackGetIterator } from "@derekjwilliams/linkedstack";


function Edge(from, to, cost) {
	this.from = from
  this.to = to
	this.cost = cost;
}

class EdgeClass {
  /** @constructor
  * @param {number} from 
  * @param {number} to
  * @param {number} cost
  */
    constructor(from, to, cost) {
        this.from = from;
        this.to = to;
        this.cost = cost;
      }
  }
  
/**
 * Perform a depth first search on a graph with n vertices from a starting point to count the number of vertices in a given component
 * @param {Map<number, Array<Edge>>} graph 
 * @param {number} start
 * @param {number} vertexCount ??
 */
export function depthFirstSearch(graph, start, vertexCount) {

  let count = 0;
  const visited = new Array(vertexCount)
  let stack;

  // push the start vertex onto the stack
  stack = stackPush(stack)(start); 
  // Start by visiting the starting vertex
  visited[start] = true;
  while (stack !== undefined) { // while stack is not empty
    const vertex = stackPeek(stack)
    stack = stackPop(stack)
    count++
    const edges = graph.get(vertex);
    if (edges != null) {
      edges.forEach((edge) => {
        // if the edge.to vertex is not in the array of visited then push onto the stack, and set to true in the visited array
        if (!visited[edge.to]) {
          stack = stackPush(stack)(edge.to);
          visited[edge.to] = true;
        }
      })
    }
  }
  return count
}
//example
/**
 * Setup graph, by adding directed edges
 * @param {Map<number, Array<Edge>>} graph 
 * @param {number} from
 * @param {number} to
 * @param {number} cost
 */
export function addDirectedEdge(graph, from, to, cost) {
  let edges = graph.get(from);
  if (edges === undefined) {
    edges = new Array(); // array of edges
    graph.set(from, edges);
  }
  edges.push(new Edge(from, to, cost));
}
  
  
  
  
  