import {Tile} from './tile';
import {Vector} from './vector';
import {Layers} from './layers';
import {Image} from './image';
import {VectorTile} from './vector-tile';

let layer = {
  Tile: Tile,
  Vector: Vector,
  Image: Image,
  VectorTile: VectorTile,
};

export { 
  Layers,
  layer,
  Image,
  VectorTile
};
