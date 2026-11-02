<script setup lang="ts">
const props = defineProps<{ registrationId: string }>()
const reason = ref('')

async function run(action: () => Promise<unknown>) {
  await action()
}

function resendDoi() {
  return run(() => $fetch(`/api/admin/registrations/${props.registrationId}/resend-doi`, {
    method: 'POST',
    body: { reason: reason.value.trim() || undefined }
  }))
}
</script>

<template>
  <button @click="resendDoi">Resend</button>
</template>
