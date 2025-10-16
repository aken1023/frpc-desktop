export default {
  app: {
    title: "Frpc Desktop",
    description: "開機自啟 / 視覺化配置 / 免費開源，提供便捷的使用體驗。"
  },
  router: {
    home: {
      title: "啟動"
    },
    proxy: {
      title: "代理"
    },
    download: {
      title: "下載"
    },
    config: {
      title: "設置"
    },
    logger: {
      title: "日誌"
    },
    about: {
      title: "關於"
    }
  },
  home: {
    uptime: {
      days: "{days}天",
      hours: "{hours}小時",
      minutes: "{minutes}分鐘",
      seconds: "{seconds}秒"
    },
    status: {
      running: "已啟動",
      disconnected: "已斷開",
      runningTime: "已運行",
      frpcStatus: "Frpc {status}"
    },
    button: {
      start: "啟 動",
      stop: "斷 開",
      viewLog: "查看日誌"
    },
    alert: {
      configRequired: {
        title: "提示",
        message: "請先前往設置頁面，修改配置後再啟動",
        confirm: "去設置"
      },
      versionNotFound: {
        title: "提示",
        message: "請先前往設置頁面，選擇版本後再啟動",
        confirm: "去設置"
      }
    }
  },
  comingSoon: {
    description: "敬請期待"
  },
  download: {
    button: {
      import: "導入"
    },
    message: {
      importSuccess: "導入成功",
      deleteSuccess: "刪除成功"
    },
    alert: {
      deleteConfirm: {
        title: "提示",
        message:
          '確認要刪除 <span class="font-bold text-primary">{name}</span> 嗎？',
        cancel: "取消",
        confirm: "刪除"
      },
      importFailed: {
        title: "導入失敗",
        versionExists: "版本已存在",
        architectureNotMatch: "所選 frp 架構與作業系統不符",
        unrecognizedFile: "無法識別文件"
      }
    },
    version: {
      downloadCount: "下載數：",
      publishTime: "發布時間：",
      downloaded: "已下載",
      download: "下載",
      noVersions: "暫無可用版本"
    }
  },
  logger: {
    message: {
      openSuccess: "打開日誌成功",
      refreshSuccess: "刷新成功"
    },
    content: {
      empty: "暫無日誌"
    },
    autoRefresh: "自動刷新",
    autoRefreshTime: "{time}秒 後自動刷新"
  },
  about: {
    button: {
      doc: "使用教程",
      donate: "捐贈名單",
      github: "倉庫地址",
      issues: "反饋問題"
    },
    features: {
      autoStart: "開機自啟",
      visualConfig: "視覺化配置",
      freeAndOpen: "免費開源"
    },
    description: "FRP跨平台桌面客戶端，視覺化配置，輕鬆實現內網穿透！",
    version: {
      latest: "最新版本"
    },
    tips: {
      latestVersion: "當前已是最新版本"
    }
  },
  config: {
    form: {
      frpcVerson: {
        label: "Frp版本",
        requireMessage: "請選擇Frp版本"
      },
      serverAddr: {
        label: "服務端地址",
        requireMessage: "請輸入服務端地址",
        patternMessage: "請輸入正確的服務端地址",
        tips: "{frpParameter}:<span class='font-black text-[#5A3DAA]'>serverAddr</span> Frps服務端地址 支持 <span class='font-black text-[#5A3DAA]'>域名</span>、<span class='font-black text-[#5A3DAA]'>IP</span>"
      },
      serverPort: {
        label: "服務器端口",
        requireMessage: "請輸入服務器端口"
      },
      user: {
        label: "用戶",
        requireMessage: "請輸入用戶",
        placeholder: "請輸入用戶"
      },
      multiuser: {
        label: "多用戶",
        requireMessage: "請選擇是否開啟多用戶"
      },
      metadatasToken: {
        label: "用戶令牌",
        requireMessage: "請輸入多用戶令牌",
        placeholder: "請輸入多用戶令牌"
      },
      authMethod: {
        label: "驗證方式",
        requireMessage: "請選擇驗證方式",
        none: "無",
        token: "令牌"
      },
      authToken: {
        label: "令牌",
        requireMessage: "請輸入令牌"
      },
      logLevel: {
        label: "日誌級別",
        requireMessage: "請選擇日誌級別"
      },
      logMaxDays: {
        label: "日誌保留天數",
        requireMessage: "請輸入日誌保留天數"
      },
      tlsEnable: {
        label: "TLS",
        requireMessage: "請選擇TLS"
      },
      transportProxyURL: {
        label: "代理地址",
        requireMessage: "請輸入代理地址",
        patternMessage: "請輸入正確的代理地址"
      },
      systemLaunchAtStartup: {
        label: "開機自啟",
        requireMessage: "請選擇是否開機自啟",
        tips: " 開啟後開機時自動啟動 Frpc-Desktop"
      },
      systemSilentStartup: {
        label: "靜默啟動",
        requireMessage: "請選擇是否開啟靜默啟動",
        tips: " 開啟後啟動時<span class='font-black text-[#5A3DAA]'>不打開界面</span>"
      },
      systemAutoConnectOnStartup: {
        label: "自動連接",
        requireMessage: "請選擇是否開啟自動連接",
        tips: " 開啟後啟動時<span class='font-black text-[#5A3DAA]'>自動連接</span>"
      },
      transportHeartbeatInterval: {
        label: "心跳間隔時間",
        requireMessage: "心跳間隔時間不能為空",
        tips: "{frpParameter}:<span class='font-black text-[#5A3DAA]'>transport.heartbeatInterval</span> 多長向服務端發送一次心跳包 單位：<span class='font-black text-[#5A3DAA]'>秒</span>"
      },
      transportHeartbeatTimeout: {
        label: "心跳超時時間",
        requireMessage: "心跳超時時間不能為空",
        tips: "{frpParameter}:<span class='font-black text-[#5A3DAA]'>transport.heartbeatTimeout</span> 心跳超時時間 單位：<span class='font-black text-[#5A3DAA]'>秒</span>"
      },
      webServerPort: {
        label: "Web端口",
        requireMessage: "web界面端口不能為空",
        tips: "{frpParameter}:<span class='font-black text-[#5A3DAA]'>transport.webServerPort</span> 自行保證端口沒有被佔用，否則會導致啟動失敗"
      },
      transportProtocol: {
        label: "傳輸協議",
        requireMessage: "傳輸協議不能為空",
        tips: "{frpParameter}:<span class='font-black text-[#5A3DAA]'>transport.protocol</span> 與 frps 之間的通信協議。默認為 tcp。"
      },
      transportDialServerTimeout: {
        label: "連接超時",
        requireMessage: "連接超時不能為空",
        tips: "{frpParameter}:<span class='font-black text-[#5A3DAA]'>transport.dialServerTimeout</span> 與服務器建立連接的最長等待時間。默認值為10秒。單位：<span class='font-black text-[#5A3DAA]'>秒</span>"
      },
      transportDialServerKeepalive: {
        label: "保活探測間隔",
        requireMessage: "保活探測間隔不能為空",
        tips: '{frpParameter}:<span class="font-black text-[#5A3DAA]">transport.dialServerKeepalive</span> 客戶端與服務端之間的連接在一定時間內沒有任何數據傳輸，系統會定期發送一些心跳數據包來保持連接的活躍狀態。如果為負，則禁用保活探測。單位：<span class="font-black text-[#5A3DAA]">秒</span>'
      },
      transportPoolCount: {
        label: "連接池數量",
        requireMessage: "連接池數量不能為空"
      },
      transportTcpMux: {
        label: "TCP複用",
        requireMessage: "TCP複用不能為空",
        tips: "{frpParameter}:<span class='font-black text-[#5A3DAA]'>transport.tcpMux</span> TCP 多路複用，默認啟用。"
      },
      transportTcpMuxKeepaliveInterval: {
        label: "多複心跳間隔",
        requireMessage: "多複心跳間隔不能為空",
        tips: "{frpParameter}:<span class='font-black text-[#5A3DAA]'>transport.tcpMuxKeepaliveInterval</span> 多路複用的保活間隔，默認值為 30 秒。單位：<span class='font-black text-[#5A3DAA]'>秒</span>"
      },
      tlsCertFile: {
        label: "TLS證書文件",
        requireMessage: "請選擇TLS證書文件",
        placeholder: "點擊選擇 TLS 證書文件"
      },
      tlsKeyFile: {
        label: "TLS密鑰文件",
        requireMessage: "請選擇TLS密鑰文件",
        placeholder: "點擊選擇 TLS 密鑰文件"
      },
      caCertFile: {
        label: "CA證書文件",
        requireMessage: "請選擇CA證書文件",
        placeholder: "點擊選擇 CA 證書文件"
      },
      tlsServerName: {
        label: "TLS Server 名稱",
        requireMessage: "請輸入TLS Server 名稱",
        placeholder: "請輸入TLS Server 名稱"
      },
      systemLanguage: {
        label: "系統語言",
        requireMessage: "請選擇系統語言"
      }
    },
    title: {
      versionSelection: "版本選擇",
      webInterface: "Web 界面",
      transportConfiguration: "傳輸配置",
      logConfiguration: "日誌配置",
      systemConfiguration: "系統配置",
      serverConfiguration: "服務器配置"
    },
    button: {
      manualRefresh: "手動刷新",
      goToDownload: "點擊這裡去下載",
      clear: "清除",
      import: "導入"
    },
    alert: {
      resetConfig: {
        title: "提示",
        message: "確定要重置配置嗎？",
        confirm: "確定",
        cancel: "取消"
      },
      resetConfigSuccess: {
        title: "提示",
        message: "重置成功 請重啟軟體",
        confirm: "立即重啟"
      },
      importTomlConfigSuccess: {
        title: "提示",
        message: "🎉 恭喜你，導入成功 請重啟軟體",
        confirm: "立即重啟"
      },
      multiuserAlert: {
        title: "提示",
        message:
          "多用戶插件需要 Frp版本 >= <span class='font-black text-[#5A3DAA]'>v0.31.0</span> 請自行選擇正確版本",
        confirm: "知道了"
      },
      exportConfigSuccess: {
        title: "🎉 導出成功",
        message: "配置路徑：{path}"
      }
    },
    message: {
      invalidLink: "連結不正確 請輸入正確的連結",
      openAppDataSuccess: "打開數據目錄成功",
      saveSuccess: "保存成功"
    },
    popover: {
      frpParameter: "Frp參數"
    },
    dialog: {
      importLink: {
        title: "導入連結"
      },
      copyLink: {
        title: "複製連結",
        message: "複製成功",
        warning: {
          message:
            "生成內容包含服務器密鑰等內容 請妥善保管 且連結僅在Frpc-Desktop中可用"
        }
      }
    }
  },
  common: {
    yes: "是",
    no: "否",
    modify: "修改",
    delete: "刪除",
    more: "更多",
    disable: "禁用",
    enable: "啟用",
    disabled: "已禁用",
    enabled: "已啟用",
    close: "關閉",
    save: "保存",
    mode: "模式",
    selectMode: "請選擇{mode}模式",
    operation: "操作",
    select: "選擇",
    frpParameter: "frp參數",
    deleteSuccess: "刪除成功",
    modifySuccess: "修改成功"
  },
  proxy: {
    inner: "內網",
    mappingAddress: "映射地址",
    visitors: "訪問者",
    visitorsProvider: "提供者",
    visitorsName: "訪問者名稱",
    noProxy: "暫無代理",
    modifyTitle: "編輯代理",
    createTitle: "添加代理",
    message: {
      copySuccess: "複製成功"
    },
    dialog: {
      listPorts: {
        title: "內網端口",
        description: "內網端口列表",
        table: {
          columns: {
            protocol: "協議",
            ip: "IP",
            port: "端口",
            operation: "操作"
          }
        }
      }
    },

    form: {
      title: {
        basicConfig: "基礎配置",
        domainConfig: "域名配置",
        proxyTransportConfig: "代理傳輸配置",
        customConfig: "自定義配置",
        pluginConfig: "插件配置",
        otherConfig: "其他代理配置"
      },
      button: {
        localPort: "本機端口",
        generateName: "生成"
      },
      formItem: {
        proxyType: {
          label: "代理類型",
          requireMessage: "請選擇代理類型"
        },
        name: {
          label: "代理名稱",
          requireMessage: "請輸入代理名稱",
          placeholder: "請輸入代理名稱"
        },
        localIP: {
          label: "內網地址",
          requireMessage: "請輸入內網地址",
          patternMessage: "請輸入正確的內網地址"
        },
        localPort: {
          label: "內網端口",
          requireMessage: "請輸入內網端口",
          patternMessage: "請輸入正確的內網端口"
        },
        remotePort: {
          label: "外網端口",
          requireMessage: "請輸入外網端口",
          patternMessage: "請輸入正確的外網端口"
        },
        subdomain: {
          label: "子域名",
          requireMessage: "請輸入子域名"
        },
        customDomains: {
          label: "自定義域名",
          requireMessage: "請至少添加一個 子域名 / 自定義域名",
          patternMessage: "請輸入正確的域名"
        },
        basicAuth: {
          label: "HTTP基本認證",
          requireMessage: "請選擇是否開啟HTTP基本認證"
        },
        httpUser: {
          label: "認證用戶名",
          requireMessage: "請輸入認證用戶名"
        },
        httpPassword: {
          label: "認證密碼",
          requireMessage: "請輸入認證密碼"
        },
        https2httpCaFile: {
          label: "證書文件",
          requireMessage: "請選擇證書文件",
          placeholder: "點擊選擇證書文件"
        },
        bindPort: {
          label: "綁定端口",
          requireMessage: "請輸入綁定端口",
          patternMessage: "請輸入正確的綁定端口",
          description:
            "要將被訪問者的服務綁定到本地哪個<span class='font-black text-[#5A3DAA]'>端口</span><br />請自行確保端口未被佔用"
        },
        transportUseEncryption: {
          label: "加密傳輸",
          requireMessage: "請選擇是否開啟加密傳輸",
          description: "開啟後，此代理的流量將被加密"
        },
        transportUseCompression: {
          label: "壓縮傳輸",
          requireMessage: "請選擇是否開啟壓縮傳輸",
          description: "開啟後，此代理的流量將被壓縮"
        },
        transportProxyProtocolVersion: {
          label: "代理協議版本",
          description: "如果非空，frpc將使用代理協議傳輸連接信息到本地服務",
          empty: "空"
        },
        bindAddr: {
          label: "綁定地址",
          requireMessage: "請輸入綁定地址",
          patternMessage: "請輸入正確的綁定地址",
          description:
            "要將被訪問者的服務綁定到本地哪個<span class='font-black text-[#5A3DAA]'>IP</span> <br /> 僅本機訪問：<span class='font-black text-[#5A3DAA]'>127.0.0.1</span> <br /> 支持局域網其他設備訪問：<span class='font-black text-[#5A3DAA]'>0.0.0.0</span>"
        },
        secretKey: {
          label: "共享密鑰",
          placeholder: "共享密鑰",
          requireMessage: "請輸入共享密鑰",
          description: "只有訪問者與被訪問者共享密鑰一致的用戶才能訪問該服務"
        },
        https2httpKeyFile: {
          label: "密鑰文件",
          requireMessage: "請選擇密鑰文件",
          placeholder: "點擊選擇密鑰文件"
        },
        serverName: {
          label: "提供者代理名稱",
          requireMessage: "請輸入提供者代理名稱",
          placeholder: "提供者代理名稱"
        },
        keepTunnelOpen: {
          label: "保持隧道開啟",
          requireMessage: "請選擇是否保持隧道開啟",
          description: "開啟後，即使沒有流量通過會保持隧道(即連接)打開。"
        },
        fallbackTo: {
          label: "回退stcp代理名稱",
          requireMessage: "請輸入回退stcp代理名稱",
          description: "當 xtcp 打洞失敗時，會回退到使用 stcp-visitor 建立連接",
          placeholder: "stcp 訪問者代理名稱"
        },
        fallbackTimeoutMs: {
          label: "回退超時毫秒",
          requireMessage: "請輸入回退超時毫秒",
          description:
            "xtcp 打洞時間超過該時間會回退到使用 stcp-visitor 建立連接 單位：<span class='font-black text-[#5A3DAA]'>毫秒</span>"
        },
        locations: {
          label: "URL 路徑",
          requireMessage: "請輸入 URL 路徑",
          description: "URL 路徑,支持正則表達式,如: /api/.*"
        }
      }
    }
  }
};