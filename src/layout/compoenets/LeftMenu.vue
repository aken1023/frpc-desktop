<script lang="ts" setup>
import { computed, defineComponent, onMounted, ref } from "vue";
import router from "@/router";
import { RouteRecordRaw } from "vue-router";
import Intro from "@/intro";
import "intro.js/introjs.css";
import confetti from "canvas-confetti/src/confetti.js";
import { useFrpcDesktopStore } from "@/store/frpcDesktop";
import pkg from "../../../package.json";

defineComponent({
  name: "AppMain"
});

const frpcDesktopStore = useFrpcDesktopStore();
const routes = ref<Array<RouteRecordRaw>>([]);
const guideSteps = ref({
  Home: {
    step: "1",
    intro: "此功能用於控制frpc的連接狀態，您可以輕鬆地斷開或重新連接。"
  },
  Proxy: {
    step: "2",
    intro:
      "在這裡，您可以方便地配置和管理代理設置。無論是添加、修改還是刪除代理，您都可以輕鬆完成。"
  },
  Download: {
    step: "3",
    intro: "透過此功能，您可以快速下載最新版本的frp。"
  },
  Config: {
    step: "4",
    intro:
      "此功能允許您設置軟體的各種配置選項，包括連接方式等。根據您的需求進行個性化設置，以優化使用體驗。"
  },
  Logger: {
    step: "5",
    intro:
      "在日誌查看功能中，您可以即時查看FRP連接的日誌資訊。這有助於您監控連接狀態，及時排查可能出現的問題。"
  },
  Version: {
    step: "6",
    intro:
      "透過此功能，您可以查看當前安裝的Frpc-Desktop版本，並檢查是否有可用更新。"
  }
});
const currentRoute = computed(() => {
  return router.currentRoute.value;
});

/**
 * 菜單切換
 * @param mi 菜單索引
 */
const handleMenuChange = (route: any) => {
  if (currentRoute.value.name === route.name) {
    return;
  }
  router.push({
    path: route.path
  });
};

const handleOpenGitHubReleases = () => {
  // ipcRenderer.send("github.openReleases")
  router.push({
    name: "About"
  });
};

const handleCompleteGuide: () => boolean = () => {
  // 禮花
  confetti({
    zIndex: 12002,
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 }
  });
  localStorage.setItem("guide", new Date().getTime().toString());
  return true; // 確保返回 boolean
};

onMounted(() => {
  routes.value = router.options.routes[0].children?.filter(
    f => !f.meta?.hidden
  ) as Array<RouteRecordRaw>;

  if (!localStorage.getItem("guide")) {
    // 開始
    Intro.onBeforeExit(handleCompleteGuide).start();
  }
});
</script>

<template>
  <div class="left-menu-container drop-shadow-xl">
    <div class="logo-container">
      <!--      <img-->
      <!--        src="/logo/only/128x128.png"-->
      <!--        class="logo animate__animated animate__bounceInLeft"-->
      <!--        alt="Logo"-->
      <!--      />-->
      <!--      <el-badge :value="'v1.1.2'" class="logo" type="primary" :offset="[-10, 42]">-->
      <img src="/logo/only/128x128.png" class="logo" alt="Logo" />
      <!--      </el-badge>-->
    </div>
    <ul class="menu-container">
      <!--      enter-active-class="animate__animated animate__bounceIn"-->
      <!--      leave-active-class="animate__animated animate__fadeOut"-->
      <li
        :data-step="guideSteps[r.name]?.step"
        :data-intro="guideSteps[r.name]?.intro"
        :data-disable-interaction="true"
        class="menu animate__animated"
        :class="currentRoute?.name === r.name ? 'menu-selected' : ''"
        v-for="r in routes"
        :key="r.name"
        @click="handleMenuChange(r)"
      >
        <IconifyIconOffline
          class="animate__animated"
          :icon="r?.meta?.icon as string"
        ></IconifyIconOffline>
      </li>
    </ul>
    <div class="menu-footer mb-2">
      <!--      <el-tag-->
      <!--        :type="frpcProcessStore.running ? 'primary' : 'warning'"-->
      <!--        effect="light"-->
      <!--        size="small"-->
      <!--        >{{ frpcProcessStore.running ? "运行中" : "已断开" }}-->
      <!--      </el-tag>-->
      <!--      <div-->
      <!--        class="menu animate__animated"-->
      <!--        @click="handleOpenGitHubReleases"-->
      <!--        :data-step="guideSteps.Version?.step"-->
      <!--        :data-intro="guideSteps.Version?.intro"-->
      <!--        data-position="top"-->
      <!--      >-->
      <!--        <IconifyIconOffline-->
      <!--          class="animate__animated"-->
      <!--          icon="attach-money-rounded"-->
      <!--        ></IconifyIconOffline>-->
      <!--      </div>-->
      <div
        class="version animate__animated"
        @click="handleOpenGitHubReleases"
        :data-step="guideSteps.Version?.step"
        :data-intro="guideSteps.Version?.intro"
        data-position="top"
      >
        {{ pkg.version }}
      </div>
    </div>
  </div>
</template>
