import request from './request';

/**
 * 获取完整目录树（分组+文档）
 * @returns {Promise<{ data: { tree: Array, cached: boolean } }>}
 * 
 * 节点类型：nodeType = "GROUP" | "DOCUMENT"（大写）
 */
export function getDirectoryTree() {
  return request.get('/api/directory-tree');
}

/**
 * 获取分组树（已废弃，使用 getDirectoryTree 代替）
 * @param {boolean} rootOnly - 是否只获取根分组
 * @returns {Promise<Array>}
 */
export function getGroupTree(rootOnly = false) {
  return request.get('/api/groups', {
    params: { rootOnly },
  });
}

/**
 * 创建分组
 * @param {Object} data - { name, parentId? }
 * @returns {Promise<Object>}
 */
export function createGroup(data) {
  return request.post('/api/groups', data);
}

/**
 * 更新分组
 * @param {number} id
 * @param {Object} data - { name?, parentId?, sortIndex? }
 * @returns {Promise<Object>}
 */
export function updateGroup(id, data) {
  return request.patch(`/api/groups/${id}`, data);
}

/**
 * 删除分组
 * @param {number} id
 * @returns {Promise<void>}
 */
export function deleteGroup(id) {
  return request.delete(`/api/groups/${id}`);
}

/**
 * 批量更新分组排序
 * @param {Array} items - [{ id, parentId?, sortIndex }]
 * @returns {Promise<void>}
 */
export function sortGroups(items) {
  return request.post('/api/sort/groups', { items });
}

