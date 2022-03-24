import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => {
        return {
            isSidebarOpen: false
        }
    },
    actions: {
        openSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen
        }
    }
})