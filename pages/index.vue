<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Create Activity</h1>
    <form class="space-y-4" @submit.prevent="submitActivity">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Full Name</label
        >
        <div class="mt-1">
          <input
            id="name"
            v-model="member.name"
            type="text"
            required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label for="company" class="block text-sm font-medium text-gray-700"
          >Company</label
        >
        <div class="mt-1">
          <input
            id="company"
            v-model="member.company"
            type="text"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label for="twitter" class="block text-sm font-medium text-gray-700"
          >Twitter</label
        >
        <div class="mt-1">
          <input
            id="twitter"
            v-model="member.twitter"
            type="text"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label for="github" class="block text-sm font-medium text-gray-700"
          >GitHub</label
        >
        <div class="mt-1">
          <input
            id="github"
            v-model="member.github"
            type="text"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <div class="mt-1">
          <input
            id="email"
            v-model="member.email"
            type="text"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label for="pronouns" class="block text-sm font-medium text-gray-700"
          >Pronouns</label
        >
        <div class="mt-1">
          <input
            id="pronouns"
            v-model="member.pronouns"
            type="text"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label for="tags" class="block text-sm font-medium text-gray-700"
          >Tags To Add</label
        >
        <div class="mt-1">
          <input
            id="tags"
            v-model="member.tags_to_add"
            type="text"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label for="description" class="block text-sm font-medium text-gray-700"
          >Description</label
        >
        <div class="mt-1">
          <textarea
            id="description"
            v-model="description"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: {},
      member: {},
      activity: {},
      description: '',
    }
  },
  created() {
    this.auth = this.$store.state.auth || false
    this.activity = this.$store.state.event || false

    if (!this.auth || !this.activity) {
      this.$router.push('/settings')
      this.$toast.error('You must provide config')
    }
  },
  methods: {
    async submitActivity() {
      try {
        const { auth, description, member, activity } = this
        const payload = { activity: { ...activity, member } }
        if (description) payload.activity.description = description
        await this.$axios({
          url: `${location.href}api/activity`,
          method: 'POST',
          data: { payload, auth },
        })
        this.clearForm()
        this.$toast.success('Added activity')
      } catch (err) {
        console.error(err)
      }
    },
    clearForm() {
      this.auth = this.$store.state.auth
      this.activity = this.$store.state.event
      this.member = {}
      this.description = ''
    },
  },
}
</script>
