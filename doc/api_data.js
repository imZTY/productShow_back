define({ "api": [
  {
    "type": "get",
    "url": "/sys/company/list",
    "title": "按页获取公司列表",
    "group": "CompanyInfo",
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
          "content": "{\n    page = 1\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": [\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 1,\n    \"companyName\": \"有间公司\",\n    \"contactName\": \"陈家杰\",\n    \"contactPhone\": \"18322222515\",\n    \"companyLicence\": \"\",\n    \"companyAddress\": \"广州中医药大学学生宿舍K722\",\n    \"companyLogo\": \"\",\n    \"companyDesc\": \"靠谱，欢迎投资\",\n    \"country\": \"中国\",\n    \"province\": \"广东\",\n    \"city\": \"广州\",\n    \"disabled\": 0\n    },\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 2,\n    \"companyName\": \"另一家公司\",\n    \"contactName\": \"曾天臆\",\n    \"contactPhone\": \"18322222515\",\n    \"companyLicence\": \"\",\n    \"companyAddress\": \"广州中医药大学学生宿舍K722\",\n    \"companyLogo\": \"\",\n    \"companyDesc\": \"靠谱，欢迎投资\",\n    \"country\": \"中国\",\n    \"province\": \"广东\",\n    \"city\": \"广州\",\n    \"disabled\": 0\n    }\n    ]\n}",
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
    "filename": "./src/main/java/com/sys/company/controller/CompanyInfoController.java",
    "groupTitle": "公司",
    "name": "GetSysCompanyList"
  },
  {
    "type": "get",
    "url": "/sys/company/one",
    "title": "",
    "group": "CompanyInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>公司id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    id:1\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 1,\n    \"companyName\": \"有间公司\",\n    \"contactName\": \"陈家杰\",\n    \"contactPhone\": \"18322222515\",\n    \"companyLicence\": \"\",\n    \"companyAddress\": \"广州中医药大学学生宿舍K722\",\n    \"companyLogo\": \"\",\n    \"companyDesc\": \"靠谱，欢迎投资\",\n    \"country\": \"中国\",\n    \"province\": \"广东\",\n    \"city\": \"广州\",\n    \"disabled\": 0\n    }\n}",
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
    "filename": "./src/main/java/com/sys/company/controller/CompanyInfoController.java",
    "groupTitle": "公司",
    "name": "GetSysCompanyOne"
  },
  {
    "type": "post",
    "url": "/sys/company/add",
    "title": "新增公司",
    "group": "CompanyInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactName",
            "description": "<p>联系人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactPhone",
            "description": "<p>联系人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyLicence",
            "description": "<p>公司证书</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyAddress",
            "description": "<p>公司地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyLogo",
            "description": "<p>公司图片文件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyDesc",
            "description": "<p>公司描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>国家</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省份</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>城市</p>"
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
          "content": "{\n    companyName:有间公司\n    contactName:曾天臆\n    contactPhone:18322222515\n    companyAddress:广州中医药大学学生宿舍K722\n    companyDesc:靠谱，欢迎投资\n    country:中国\n    province:广东\n    city:广州\n}",
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
    "filename": "./src/main/java/com/sys/company/controller/CompanyInfoController.java",
    "groupTitle": "公司",
    "name": "PostSysCompanyAdd"
  },
  {
    "type": "post",
    "url": "/sys/company/delete",
    "title": "删除公司",
    "group": "CompanyInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>公司id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    id:2\n}",
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
    "filename": "./src/main/java/com/sys/company/controller/CompanyInfoController.java",
    "groupTitle": "公司",
    "name": "PostSysCompanyDelete"
  },
  {
    "type": "post",
    "url": "/sys/company/update",
    "title": "修改公司信息",
    "group": "CompanyInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>公司id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactName",
            "description": "<p>联系人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactPhone",
            "description": "<p>联系人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyLicence",
            "description": "<p>公司证书</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyAddress",
            "description": "<p>公司地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyLogo",
            "description": "<p>公司图片文件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyDesc",
            "description": "<p>公司描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>国家</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省份</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>城市</p>"
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
          "content": "{\n    id:1\n    contactName:陈家杰\n}",
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
    "filename": "./src/main/java/com/sys/company/controller/CompanyInfoController.java",
    "groupTitle": "公司",
    "name": "PostSysCompanyUpdate"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "F__study_jidi_2018_ITMSW_PJ_ant1_doc_main_js",
    "groupTitle": "F__study_jidi_2018_ITMSW_PJ_ant1_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/product/sort/material/list",
    "title": "按页获取所有材料",
    "group": "MaterialType",
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
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": [\n    {\n    \"id\": 1,\n    \"companyId\": 1,\n    \"materialName\": \"金属制品\",\n    \"materialNameEn\": \"MT\",\n    \"materialRank\": 1,\n    \"disabled\": 0,\n    \"productTypes\": [\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 1,\n    \"materialId\": 1,\n    \"productCode\": \"BS\",\n    \"productIndex\": 1,\n    \"productName\": \"套装\",\n    \"productNameEn\": \"BarSET\",\n    \"productRank\": 1,\n    \"disabled\": 0\n    },\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 2,\n    \"materialId\": 1,\n    \"productCode\": \"IBS\",\n    \"productIndex\": 2,\n    \"productName\": \"冰桶\",\n    \"productNameEn\": \"Ice Bucket\",\n    \"productRank\": 2,\n    \"disabled\": 0\n    }\n    ]\n    },\n    {\n    \"id\": 2,\n    \"companyId\": 1,\n    \"materialName\": \"塑料制品\",\n    \"materialNameEn\": \"PL\",\n    \"materialRank\": 3,\n    \"disabled\": 0,\n    \"productTypes\": [\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 3,\n    \"materialId\": 2,\n    \"productCode\": \"MG\",\n    \"productIndex\": 3,\n    \"productName\": \"杯子\",\n    \"productNameEn\": \"Mug\",\n    \"productRank\": 3,\n    \"disabled\": 0\n    }\n    ]\n    }\n    ]\n}",
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
    "filename": "./src/main/java/com/product/sort/controller/MaterialTypeController.java",
    "groupTitle": "材料",
    "name": "GetProductSortMaterialList"
  },
  {
    "type": "post",
    "url": "/product/sort/material/add",
    "title": "新增材料",
    "group": "MaterialType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "companyId",
            "description": "<p>生产公司的id？</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "materialName",
            "description": "<p>中文材料名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "materialNameEn",
            "description": "<p>英文材料名</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "materialRank",
            "description": "<p>材料排序</p>"
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
          "content": "{\n    companyId:1\n    materialName:金属制品\n    materialNameEn:MT\n    materialRank:1.0\n}",
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
    "filename": "./src/main/java/com/product/sort/controller/MaterialTypeController.java",
    "groupTitle": "材料",
    "name": "PostProductSortMaterialAdd"
  },
  {
    "type": "post",
    "url": "/product/sort/material/delete",
    "title": "删除材料",
    "group": "MaterialType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>材料id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    id:3\n}",
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
    "filename": "./src/main/java/com/product/sort/controller/MaterialTypeController.java",
    "groupTitle": "材料",
    "name": "PostProductSortMaterialDelete"
  },
  {
    "type": "post",
    "url": "/product/sort/material/update",
    "title": "修改材料信息",
    "group": "MaterialType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>材料id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "companyId",
            "description": "<p>生产公司的id？</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "materialName",
            "description": "<p>中文材料名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "materialNameEn",
            "description": "<p>英文材料名</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "materialRank",
            "description": "<p>材料排序</p>"
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
          "content": "{\n    id:2\n    materialRank:3.0\n}",
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
    "filename": "./src/main/java/com/product/sort/controller/MaterialTypeController.java",
    "groupTitle": "材料",
    "name": "PostProductSortMaterialUpdate"
  },
  {
    "type": "get",
    "url": "/product/view/list",
    "title": "按页获取所有货品",
    "group": "ProductInfo",
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
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": [\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 1,\n    \"productId\": 2,\n    \"userId\": 1,\n    \"productCode\": \"BS001\",\n    \"clientCode\": \"AB123\",\n    \"createTime\": 1234567890,\n    \"nameCn\": \"箱子K34\",\n    \"nameEn\": \"box\",\n    \"descCn\": \"一个箱子\",\n    \"descEn\": \"a box\",\n    \"sizeCn\": \"30厘米\",\n    \"sizeEn\": \"30cm\",\n    \"materialCn\": \"塑料\",\n    \"materialEn\": null,\n    \"surfaceCn\": \"光滑\",\n    \"surfaceEn\": \"smooth\",\n    \"packageCn\": \"精致\",\n    \"packageEn\": \"fine\",\n    \"cartonCn\": \"已完成\",\n    \"cartonEn\": \"finished\",\n    \"disabled\": 0\n    },\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 2,\n    \"productId\": 2,\n    \"userId\": 1,\n    \"productCode\": \"BS001\",\n    \"clientCode\": \"AB123\",\n    \"createTime\": 1234567890,\n    \"nameCn\": \"飞机K34\",\n    \"nameEn\": \"plane\",\n    \"descCn\": \"一台飞机\",\n    \"descEn\": \"a plane\",\n    \"sizeCn\": \"30米\",\n    \"sizeEn\": \"30m\",\n    \"materialCn\": \"轻钢铁\",\n    \"materialEn\": null,\n    \"surfaceCn\": \"光滑\",\n    \"surfaceEn\": \"smooth\",\n    \"packageCn\": \"精致\",\n    \"packageEn\": \"fine\",\n    \"cartonCn\": \"未完成\",\n    \"cartonEn\": \"unfinished\",\n    \"disabled\": 1\n    }\n    ]\n}",
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
    "filename": "./src/main/java/com/product/view/controller/ProductInfoController.java",
    "groupTitle": "货品",
    "name": "GetProductViewList"
  },
  {
    "type": "post",
    "url": "/product/view/add",
    "title": "新增货品",
    "group": "ProductInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "productId",
            "description": "<p>子分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userId",
            "description": "<p>操作员id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productCode",
            "description": "<p>货品编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientCode",
            "description": "<p>手机验证码？</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "createTime",
            "description": "<p>记录创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nameCn",
            "description": "<p>名称中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nameEn",
            "description": "<p>名称英文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descCn",
            "description": "<p>描述中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descEn",
            "description": "<p>描述英文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sizeCn",
            "description": "<p>规格中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sizeEn",
            "description": "<p>规格英文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "materialCn",
            "description": "<p>材质中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "materialEn",
            "description": "<p>材质英文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surfaceCn",
            "description": "<p>表面中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surfaceEn",
            "description": "<p>表面英文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "packageCn",
            "description": "<p>包装中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "packageEn",
            "description": "<p>包装英文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartonCn",
            "description": "<p>外箱中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartonEn",
            "description": "<p>外箱英文</p>"
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
          "content": "{\n    productId:2\n    userId:1\n    productCode:BS001\n    clientCode:AB123\n    createTime:1234567890\n    nameCn:箱子K34\n    nameEn:box\n    descCn:一个箱子\n    descEn:a box\n    sizeCn:30厘米\n    sizeEn:30cm\n    materialCn:塑料\n    materialEn:plastic\n    surfaceCn:光滑\n    surfaceEn:smooth\n    packageCn:精致\n    packageEn:fine\n    cartonCn:已完成\n    cartonEn:finished\n}",
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
    "filename": "./src/main/java/com/product/view/controller/ProductInfoController.java",
    "groupTitle": "货品",
    "name": "PostProductViewAdd"
  },
  {
    "type": "post",
    "url": "/product/view/delete",
    "title": "删除货品",
    "group": "ProductInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    id:2\n}",
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
    "filename": "./src/main/java/com/product/view/controller/ProductInfoController.java",
    "groupTitle": "货品",
    "name": "PostProductViewDelete"
  },
  {
    "type": "post",
    "url": "/product/view/update",
    "title": "修改货品信息",
    "group": "ProductInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>货品id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "productId",
            "description": "<p>子分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userId",
            "description": "<p>操作员id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productCode",
            "description": "<p>货品编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientCode",
            "description": "<p>手机验证码？</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "createTime",
            "description": "<p>记录创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nameCn",
            "description": "<p>名称中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nameEn",
            "description": "<p>名称英文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descCn",
            "description": "<p>描述中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descEn",
            "description": "<p>描述英文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sizeCn",
            "description": "<p>规格中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sizeEn",
            "description": "<p>规格英文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "materialCn",
            "description": "<p>材质中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "materialEn",
            "description": "<p>材质英文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surfaceCn",
            "description": "<p>表面中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surfaceEn",
            "description": "<p>表面英文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "packageCn",
            "description": "<p>包装中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "packageEn",
            "description": "<p>包装英文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartonCn",
            "description": "<p>外箱中文</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartonEn",
            "description": "<p>外箱英文</p>"
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
          "content": "{\n    id:2\n    disabled:1\n}",
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
    "filename": "./src/main/java/com/product/view/controller/ProductInfoController.java",
    "groupTitle": "货品",
    "name": "PostProductViewUpdate"
  },
  {
    "type": "get",
    "url": "/product/sort/type/list",
    "title": "按页获取所有子分类",
    "group": "ProductType",
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
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": [\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 1,\n    \"materialId\": 1,\n    \"productCode\": \"BS\",\n    \"productIndex\": 1,\n    \"productName\": \"套装\",\n    \"productNameEn\": \"BarSET\",\n    \"productRank\": 1,\n    \"disabled\": 0\n    },\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 2,\n    \"materialId\": 1,\n    \"productCode\": \"IBS\",\n    \"productIndex\": 2,\n    \"productName\": \"冰桶\",\n    \"productNameEn\": \"Ice Bucket\",\n    \"productRank\": 2,\n    \"disabled\": 0\n    },\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 3,\n    \"materialId\": 2,\n    \"productCode\": \"MG\",\n    \"productIndex\": 3,\n    \"productName\": \"杯子\",\n    \"productNameEn\": \"Mug\",\n    \"productRank\": 3,\n    \"disabled\": 1\n    }\n    ]\n}",
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
    "filename": "./src/main/java/com/product/sort/controller/ProductTypeController.java",
    "groupTitle": "子分类",
    "name": "GetProductSortTypeList"
  },
  {
    "type": "post",
    "url": "/product/sort/type/add",
    "title": "新增子分类",
    "group": "ProductType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "materialId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productCode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "productIndex",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productNameEn",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "productRank",
            "description": ""
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
          "content": "{\n    materialId:1\n    productCode:BS\n    productIndex:1\n    productName:套装\n    productNameEn:BarSET\n    productRank:1.0\n}",
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
    "filename": "./src/main/java/com/product/sort/controller/ProductTypeController.java",
    "groupTitle": "子分类",
    "name": "PostProductSortTypeAdd"
  },
  {
    "type": "post",
    "url": "/product/sort/type/delete",
    "title": "删除子分类",
    "group": "ProductType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>子分类id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    id:3\n}",
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
    "filename": "./src/main/java/com/product/sort/controller/ProductTypeController.java",
    "groupTitle": "子分类",
    "name": "PostProductSortTypeDelete"
  },
  {
    "type": "post",
    "url": "/product/sort/type/update",
    "title": "修改子分类信息",
    "group": "ProductType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "materialId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productCode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "productIndex",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productNameEn",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "productRank",
            "description": ""
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
          "content": "{\n    id:3\n    disabled:1\n}",
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
    "filename": "./src/main/java/com/product/sort/controller/ProductTypeController.java",
    "groupTitle": "子分类",
    "name": "PostProductSortTypeUpdate"
  },
  {
    "type": "get",
    "url": "/sys/role/list",
    "title": "按页获取所有角色",
    "group": "RoleInfo",
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
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": [\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 1,\n    \"roleName\": \"管理员\",\n    \"disabled\": 0\n    },\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 2,\n    \"roleName\": \"主管\",\n    \"disabled\": 0\n    },\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 3,\n    \"roleName\": \"员工\",\n    \"disabled\": 0\n    }\n    ]\n}",
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
    "filename": "./src/main/java/com/sys/user/controller/RoleInfoController.java",
    "groupTitle": "角色",
    "name": "GetSysRoleList"
  },
  {
    "type": "post",
    "url": "/sys/role/add",
    "title": "新增角色",
    "group": "RoleInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>角色名称</p>"
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
          "content": "{\n    roleName:管理员\n}",
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
    "filename": "./src/main/java/com/sys/user/controller/RoleInfoController.java",
    "groupTitle": "角色",
    "name": "PostSysRoleAdd"
  },
  {
    "type": "post",
    "url": "/sys/role/delete",
    "title": "删除角色",
    "group": "RoleInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>角色id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    id:7\n}",
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
    "filename": "./src/main/java/com/sys/user/controller/RoleInfoController.java",
    "groupTitle": "角色",
    "name": "PostSysRoleDelete"
  },
  {
    "type": "post",
    "url": "/sys/role/update",
    "title": "修改角色信息",
    "group": "RoleInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>角色id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>角色名称</p>"
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
          "content": "{\n    id:8\n    disabled:1\n}",
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
    "filename": "./src/main/java/com/sys/user/controller/RoleInfoController.java",
    "groupTitle": "角色",
    "name": "PostSysRoleUpdate"
  },
  {
    "type": "get",
    "url": "/sys/user/list",
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
            "description": "<p>页号(必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "roleIds",
            "description": "<p>角色id条件数组</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别条件</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "disabled",
            "description": "<p>是否启用</p>"
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
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": [\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 2,\n    \"roleId\": 1,\n    \"loginCode\": \"oh\",\n    \"password\": \"123456\",\n    \"passwordSrc\": \"123456\",\n    \"userName\": \"带\",\n    \"phone\": \"\",\n    \"sex\": \"男\",\n    \"disabled\": 0\n    },\n    {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 3,\n    \"roleId\": 1,\n    \"loginCode\": \"565718\",\n    \"password\": \"123\",\n    \"passwordSrc\": \"123\",\n    \"userName\": \"sys\",\n    \"phone\": \"18320444515\",\n    \"sex\": \"\",\n    \"disabled\": 0\n    }\n    ]\n}",
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
    "filename": "./src/main/java/com/sys/user/controller/UserInfoController.java",
    "groupTitle": "用户",
    "name": "GetSysUserList"
  },
  {
    "type": "post",
    "url": "/sys/user/add",
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
          "content": "{\n    roleId:1\n    userName:sys\n    password:123\n    passwordSrc:123\n    loginCode:565718\n    phone:18320444515\n}",
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
    "filename": "./src/main/java/com/sys/user/controller/UserInfoController.java",
    "groupTitle": "用户",
    "name": "PostSysUserAdd"
  },
  {
    "type": "post",
    "url": "/sys/user/delete",
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
    "filename": "./src/main/java/com/sys/user/controller/UserInfoController.java",
    "groupTitle": "用户",
    "name": "PostSysUserDelete"
  },
  {
    "type": "post",
    "url": "/sys/user/login",
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
          "content": "{\n    userName:sys\n    password:123\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"resultCode\": 200,\n    \"resultMsg\": \"成功\",\n    \"data\": {\n    \"ids\": null,\n    \"rows\": 10,\n    \"page\": 0,\n    \"pageStart\": 0,\n    \"id\": 3,\n    \"roleId\": 1,\n    \"loginCode\": \"565718\",\n    \"password\": \"123\",\n    \"passwordSrc\": \"123\",\n    \"userName\": \"sys\",\n    \"phone\": \"18320444515\",\n    \"sex\": \"\",\n    \"disabled\": 0\n    }\n}",
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
    "filename": "./src/main/java/com/sys/user/controller/UserInfoController.java",
    "groupTitle": "用户",
    "name": "PostSysUserLogin"
  },
  {
    "type": "post",
    "url": "/sys/user/update",
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
    "filename": "./src/main/java/com/sys/user/controller/UserInfoController.java",
    "groupTitle": "用户",
    "name": "PostSysUserUpdate"
  }
] });
