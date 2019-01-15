package com.itmsw.ant1.service;

import com.itmsw.ant1.entity.UserInfo;
import com.itmsw.ant1.util.dto.CommonDTO;

import java.util.List;

/**
 * 用户接口
 添加用户（三个身份：管理员、主管、员工）
 修改信息信息
 删除接口
 * @author tianyi
 * @date 2019-01-15 16:08
 */
public interface UserInfoService {

    /**
     * 添加用户
     * @param userInfo spring自动装配的对象
     * @return
     */
    public CommonDTO addUser(UserInfo userInfo);

    /**
     * 修改用户信息
     * @param userInfo spring自动装配的对象
     * @return
     */
    public CommonDTO update(UserInfo userInfo);

    /**
     * 删除用户
     * @param userInfo
     * @return
     */
    public CommonDTO delete(UserInfo userInfo);

    /**
     * 获取用户列表
     * @param userInfo 含有分页属性
     * @return
     */
    public CommonDTO getListByPage(UserInfo userInfo);

    /**
     * 用户登录
     * @param userInfo
     * @return
     */
    public CommonDTO login(UserInfo userInfo);
}
