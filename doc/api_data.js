define({ "api": [
  {
    "type": "get",
    "url": "/user/list",
    "title": "按页获取列表",
    "group": "UserInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    page:1\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": [\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 2,\n    \"roleId\": 1,\n    \"loginCode\": \"oh\",\n    \"password\": \"123456\",\n    \"passwordSrc\": \"123456\",\n    \"userName\": \"带\",\n    \"phone\": \"\",\n    \"sex\": \"男\",\n    \"disabled\": 0\n    },\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 3,\n    \"roleId\": 1,\n    \"loginCode\": \"565718\",\n    \"password\": \"123\",\n    \"passwordSrc\": \"123\",\n    \"userName\": \"zty\",\n    \"phone\": \"18320444515\",\n    \"sex\": \"\",\n    \"disabled\": 0\n    }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/itmsw/ant1/controller/UserInfoController.java",
    "groupTitle": "用户信息",
    "name": "GetUserList"
  },
  {
    "type": "post",
    "url": "/user/add",
    "title": "添加用户",
    "group": "UserInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "roleId",
            "description": "<p>初始角色id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginCode",
            "description": "<p>初始验证码？？</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>初始用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>初始密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordSrc",
            "description": "<p>初始密码的？？</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>初始手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>初始性别</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "disabled",
            "description": "<p>是否启用？</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    roleId:1\n    userName:zty\n    password:123\n    passwordSrc:123\n    loginCode:565718\n    phone:18320444515\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": 1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/itmsw/ant1/controller/UserInfoController.java",
    "groupTitle": "用户信息",
    "name": "PostUserAdd"
  },
  {
    "type": "post",
    "url": "/user/delete",
    "title": "删除用户",
    "group": "UserInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    id:4\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": 1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/itmsw/ant1/controller/UserInfoController.java",
    "groupTitle": "用户信息",
    "name": "PostUserDelete"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "group": "UserInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    userName:zty\n    password:123\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 3,\n    \"roleId\": 1,\n    \"loginCode\": \"565718\",\n    \"password\": \"123\",\n    \"passwordSrc\": \"123\",\n    \"userName\": \"zty\",\n    \"phone\": \"18320444515\",\n    \"sex\": \"\",\n    \"disabled\": 0\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/itmsw/ant1/controller/UserInfoController.java",
    "groupTitle": "用户信息",
    "name": "PostUserLogin"
  },
  {
    "type": "post",
    "url": "/user/update",
    "title": "修改用户信息",
    "group": "UserInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "roleId",
            "description": "<p>用户角色id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginCode",
            "description": "<p>用户验证码？？</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordSrc",
            "description": "<p>用户密码的？？</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>用户性别</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "disabled",
            "description": "<p>是否启用？</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    id:4\n    roleId:2\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": 1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "resultCode",
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultMsg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据主体</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/itmsw/ant1/controller/UserInfoController.java",
    "groupTitle": "用户信息",
    "name": "PostUserUpdate"
  }
] });