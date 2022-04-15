<template>
  <div class="complete-profile">
    <div class="complete-profile-title">Profile Completion</div>
    <div class="progress-bar">
      <span class="progress-bar-circle">
        <progress-circle completed-steps="5" total-steps="10" />
      </span>
      <span class="progress-bar-text">Complete your profile</span>
    </div>
  </div>
</template>
<script>
import { ProgressCircle } from 'vue-progress-circle'
export default {
  name: 'ProgressCircleSection',
  components: {
    ProgressCircle,
  },
}
</script>
