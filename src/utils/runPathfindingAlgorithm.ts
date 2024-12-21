import { aStar } from "../lib/algorithms/pathfinding/aStar";
import { bfs } from "../lib/algorithms/pathfinding/bfs";
import { dfs } from "../lib/algorithms/pathfinding/dfs";
import { djikstra } from "../lib/algorithms/pathfinding/djikstra";
import { AlgorithmType, GridType, TileType } from "./types";

export const runPathfindingAlgorithm = ({
    algorithm,
    grid,
    startTile,
    endTile,
}:{
    algorithm: AlgorithmType;
    grid: GridType;
    startTile: TileType;
    endTile: TileType;
}) => {
    switch(algorithm) {
        case "BFS":
            return bfs(grid, startTile, endTile);
        case "DFS":
            return dfs(grid, startTile, endTile);
        case "DJIKESTRA":
            return djikstra(grid, startTile, endTile);
        case "A_STAR":
            return aStar(grid, startTile, endTile);
        default:
            return bfs(grid, startTile, endTile);
    }
}