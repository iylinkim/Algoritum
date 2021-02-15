function Dictionary() {
  let items = {};

  this.set = function (key, value) {
    items[key] = value; //{1}
  };

  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.has = function (key) {
    return items.hasOwnProperty(key);
    //return value in items;
  };

  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.clear = function () {
    items = {};
  };

  this.size = function () {
    return Object.keys(items).length;
  };

  this.keys = function () {
    return Object.keys(items);
  };

  this.values = function () {
    let values = [];
    for (let k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  };

  this.each = function (fn) {
    for (let k in items) {
      if (this.has(k)) {
        fn(k, items[k]);
      }
    }
  };

  this.getItems = function () {
    return items;
  };
}

function Graph() {
  let vertices = []; //list

  let adjList = new Dictionary();

  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []); //인접 리스트를 행렬과 함께 초기화한다
  };

  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    //adjList.get(w).push(v);
  };

  this.toString = function () {
    let s = "";
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + " -> ";
      let neighbors = adjList.get(vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  };

  let initializeColor = function () {
    let color = [];
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = "white";
    }
    return color;
  };

  this.bfs = function (v, callback) {
    let color = initializeColor(),
      queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[u] = "grey";
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === "white") {
          color[w] = "grey";
          queue.enqueue(w);
        }
      }
      color[u] = "black";
      if (callback) {
        callback(u);
      }
    }
  };

  this.dfs = function (callback) {
    let color = initializeColor();

    for (let i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === "white") {
        dfsVisit(vertices[i], color, callback);
      }
    }
  };

  let dfsVisit = function (u, color, callback) {
    color[u] = "grey";
    if (callback) {
      callback(u);
    }
    console.log("방문했음 " + u);
    let neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];
      if (color[w] === "white") {
        dfsVisit(w, color, callback);
      }
    }
    color[u] = "black";
    console.log("탐색했음 " + u);
  };

  this.BFS = function (v) {
    let color = initializeColor(),
      queue = new Queue(),
      d = [],
      pred = [];
    queue.enqueue(v);

    for (let i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[u] = "grey";
      for (i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === "white") {
          color[w] = "grey";
          d[w] = d[u] + 1;
          pred[w] = u;
          queue.enqueue(w);
        }
      }
      color[u] = "black";
    }

    return {
      distances: d,
      predecessors: pred,
    };
  };

  let time = 0;
  this.DFS = function () {
    let color = initializeColor(),
      d = [],
      f = [],
      p = [];
    time = 0;

    for (let i = 0; i < vertices.length; i++) {
      f[vertices[i]] = 0;
      d[vertices[i]] = 0;
      p[vertices[i]] = null;
    }

    for (i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === "white") {
        DFSVisit(vertices[i], color, d, f, p);
      }
    }

    return {
      discovery: d,
      finished: f,
      predecessors: p,
    };
  };

  let DFSVisit = function (u, color, d, f, p) {
    console.log("방문했음 " + u);
    color[u] = "grey";
    d[u] = ++time;
    let neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];
      if (color[w] === "white") {
        p[w] = u;
        DFSVisit(w, color, d, f, p);
      }
    }
    color[u] = "black";
    f[u] = ++time;
    console.log("탐색했음 " + u);
  };
}

let graph = new Graph();

let myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log("********* 그래프 출력 ***********");

console.log(graph.toString());

console.log("********* bfs ***********");

function printNode(value) {
  console.log("방문한 정점: " + value);
}

graph.bfs(myVertices[0], printNode);

console.log("********* dfs ***********");

graph.dfs();

console.log("********* 최단 거리 - BFS ***********");
let shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA.distances);
console.log(shortestPathA.predecessors);

//A에서 다른 정점들까지의 경로
let fromVertex = myVertices[0];

for (i = 1; i < myVertices.length; i++) {
  let toVertex = myVertices[i],
    path = new Stack();
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  let s = path.pop();
  while (!path.isEmpty()) {
    s += " - " + path.pop();
  }
  console.log(s);
}

console.log("********* 위상 정렬 - DFS ***********");

//let result = graph.DFS();
//console.log(result.discovery);
//console.log(result.finished);
//console.log(result.predecessors);

graph = new Graph();

myVertices = ["A", "B", "C", "D", "E", "F"];
for (i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("F", "E");

let result = graph.DFS();
console.log(result.discovery);
console.log(result.finished);
console.log(result.predecessors);

let fTimes = result.finished;
s = "";
for (let count = 0; count < myVertices.length; count++) {
  let max = 0;
  let maxName = null;
  for (i = 0; i < myVertices.length; i++) {
    if (fTimes[myVertices[i]] > max) {
      max = fTimes[myVertices[i]];
      maxName = myVertices[i];
    }
  }
  s += " - " + maxName;
  delete fTimes[maxName];
}
console.log(s);
