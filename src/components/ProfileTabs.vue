<template>
  <div class="profile-tabs">
    <div class="tab">
      <img
        alt="personal-detail-icon"
        src="@/assets/personal-detail-icon.png"
        width="30"
        height="30"
      />
      <span class="tab-name">Personal Detail</span>
    </div>
    <div class="tab">
      <img
        alt="coupon-icon"
        src="@/assets/coupon-icon.png"
        width="30"
        height="30"
      />
      <span class="tab-name">Coupon</span>
    </div>
    <div class="tab active">
      <img
        alt="bank-detail-icon"
        src="@/assets/bank-detail-icon.png"
        width="30"
        height="30"
      />
      <span class="tab-name">Bank Detail</span>
    </div>
    <div class="tab">
      <img
        alt="document-icon"
        src="@/assets/document-icon.png"
        width="30"
        height="30"
      />
      <span class="tab-name">Document</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileTabs',
}
</script>
