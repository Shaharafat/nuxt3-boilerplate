import { defineStore } from 'pinia';
export const useUserStore = defineStore('userData', {
	state: () => {
		return {
			userList: [] as UserInfo[],
			user: null as UserInfo | null,
			name: 'Arafat',
		};
	},
	getters: {
		getUser: (state) => {
			return state.user;
		},
		getName: (state) => {
			return state.name;
		},
	},
});

interface UserInfo {
	name: string;
	age: number;
}
