import request from './request'

/**
 * 获取仪表盘统计数据
 */
export const getDashboardStats = () => {
  return request.get('/api/admin/dashboard/stats')
}

