<template>
  <div class="left-section">
    <div class="item-cols">
      <div class="item-col">
        <router-link to="/">
          <img
            alt="bell-icon"
            src="@/assets/dashboard.png"
            width="36"
            height="37"
          />
          <span>Dashboard</span>
        </router-link>
      </div>
      <div class="item-col">
        <router-link to="/">
          <img
            alt="bell-icon"
            src="@/assets/performance.png"
            width="32"
            height="32"
          />
          <span>Performance</span>
        </router-link>
      </div>
      <div class="item-col">
        <router-link to="/">
          <img
            alt="bell-icon"
            src="@/assets/payment.png"
            width="36"
            height="36"
          />
          <span>Payment</span>
        </router-link>
      </div>
    </div>

    <div class="item-col-bottom">
      <router-link to="/">
        <img
          alt="bell-icon"
          src="@/assets/next-icon.png"
          width="46"
          height="46"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LeftSection',
}
</script>
<style>
.left-section {
  min-width: 150px;
  max-width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 0 25px;
}

.item-col {
  margin-bottom: 65px;
}

.item-col:last-child {
  margin-bottom: 0;
}

.item-col span {
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
}

.item-col-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 30px;
}
</style>
