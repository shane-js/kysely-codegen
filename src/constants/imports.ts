import { ModuleReferenceNode } from '../nodes';

export const GLOBAL_IMPORTS = {
  ColumnType: new ModuleReferenceNode('kysely'),
  RawBuilder: new ModuleReferenceNode('kysely'),
};