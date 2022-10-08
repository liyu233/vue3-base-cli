import useUserStore from "@/stores/user/index";

export default function useStore() {
  return {
    user: useUserStore(),
  };
}
