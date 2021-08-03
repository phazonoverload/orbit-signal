<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Settings</h1>
    <form
      class="space-y-4 bg-gray-200 p-4 rounded-md"
      @submit.prevent="updateAuthDetails"
    >
      <h2 class="text-lg font-bold">Auth Details</h2>
      <div>
        <label
          for="workspace-id"
          class="block text-sm font-medium text-gray-700"
          >Workspace ID</label
        >
        <div class="mt-1">
          <input
            id="workspace-id"
            v-model="auth.workspaceId"
            type="text"
            required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label for="api-token" class="block text-sm font-medium text-gray-700"
          >API Token[<a href="https://app.orbit.love/user/edit" target="_blank">find it</a>]</label
        >
        <div class="mt-1">
          <input
            id="api-token"
            v-model="auth.apiToken"
            type="password"
            required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Update
        </button>
      </div>
    </form>
    <form
      class="space-y-4 bg-gray-200 p-4 rounded-md mt-4"
      @submit.prevent="updateEventDetails"
    >
      <h2 class="text-lg font-bold">Event Details</h2>
      <div>
        <label
          for="activity-type"
          class="block text-sm font-medium text-gray-700"
          >Activity Type</label
        >
        <div class="mt-1">
          <input
            id="activity-type"
            v-model="event.activity_type"
            type="text"
            required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label
          for="activity-title"
          class="block text-sm font-medium text-gray-700"
          >Activity Title</label
        >
        <div class="mt-1">
          <input
            id="activity-title"
            v-model="event.title"
            type="text"
            required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Update
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: false,
      event: false,
    }
  },
  created() {
    this.auth = this.$store.state.auth || {}
    this.event = this.$store.state.event || {}
  },
  methods: {
    updateAuthDetails() {
      this.$store.dispatch('setAuthDetails', this.auth)
      this.$toast.success('Saved')
    },
    updateEventDetails() {
      this.$store.dispatch('setEventDetails', this.event)
      this.$toast.success('Saved')
    },
  },
}
</script>
