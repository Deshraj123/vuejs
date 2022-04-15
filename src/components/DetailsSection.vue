<template>
  <div class="form-section">
    <form>
      <div class="input-fields-form">
        <div class="input-group input-group-bank-name">
          <label for="bank-name" class="label">Bank Name</label>
          <div class="control">
            <input
              type="text"
              id="bank-name"
              name="text"
              class="input-text input-name"
            />
          </div>
        </div>
        <div class="input-group input-group-account-name">
          <label for="account-name" class="label">Account Name</label>
          <div class="control">
            <input
              type="text"
              id="account-name"
              name="text"
              class="input-text input-account-name"
            />
          </div>
        </div>
        <div class="input-group input-group-account-number">
          <label for="account-number" class="label">Account Number</label>
          <div class="control">
            <input
              type="text"
              id="account-number"
              name="text"
              class="input-text input-account-number"
            />
          </div>
        </div>
        <div class="input-group input-group-branch-name">
          <label for="branch" class="label">Branch</label>
          <div class="control">
            <input
              type="text"
              id="branch"
              name="text"
              class="input-text input-branch-name"
            />
          </div>
        </div>
        <div class="input-group input-group-iban">
          <label for="iban" class="label">IBAN</label>
          <div class="control select-iban">
            <select id="iban" name="iban">
              <option value="us">US</option>
              <option value="africa">AFRICA</option>
              <option value="australia">AUSTRALIA</option>
            </select>
          </div>
        </div>
        <div class="input-group input-group-currency">
          <label for="currency" class="label">Currency</label>
          <div class="control select-currency">
            <select id="currency" name="currency">
              <option value="aed">AEd</option>
              <option value="eur">EUR</option>
              <option value="azn">AZN</option>
            </select>
          </div>
        </div>
        <div class="input-group input-group-swift-code">
          <label for="swift-code" class="label">Swift Code</label>
          <div class="control select-swift-code">
            <select id="swift-code" name="swift-code">
              <option value="12122eee">12122eee</option>
              <option value="ACBLINBBTRY">ACBLINBBTRY</option>
              <option value="ACBLINBB">ACBLINBB</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-action">
        <button type="button" class="save-change">Save Changes</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'DetailsSection',
}
</script>
