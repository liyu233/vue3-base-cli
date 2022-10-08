<template>
  <div class="text-danger">登录 {{ name }}</div>
  <input v-model="loginInfo.username" />
  <input v-model="loginInfo.password" />
  <button @click="login">登录</button>
  <button @click="setName">set pinia</button>
  <button
    @click="
      () => {
        $router.push('/');
      }
    "
  >
    首页
  </button>
</template>

<script setup lang="ts">
import { apiUserManager } from "@/api/requests/user";
import { onMounted, ref } from "vue";
import type { UserInfo } from "@/api/requests/user/type";

import { storeToRefs } from "pinia";
import useStore from "@/stores";
const { user } = useStore();
const { name } = storeToRefs(user);

const setName = () => {
  const store = useStore().user;
  store.setUserName("Ssss");
};

const loginInfo = ref<UserInfo>({
  username: undefined,
  password: undefined,
});

const login = async () => {
  const { ok, data, message } = await apiUserManager.login({
    username: loginInfo.value.username,
    password: loginInfo.value.password,
  });
  if (ok) {
    console.log(data);
  } else {
    alert(message);
  }
};

onMounted(() => {
  //
});
</script>
