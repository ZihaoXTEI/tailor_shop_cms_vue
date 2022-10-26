<template>
  <div class="clearfix">
    <a-upload
      v-model:file-list="fileList"
      action="http://localhost:9000/upload/fabric"
      list-type="picture-card"
      multiple
      :max-count="6"
      :headers="headers"
      name="image"
      @change="handleChange"
      @preview="handlePreview"
      @remove="handleRemove"
    >
      <div v-if="fileList.length < 6">
        <plus-outlined />
        <div style="margin-top: 8px">上传</div>
      </div>
    </a-upload>
    <a-modal
      :visible="previewVisible"
      :title="previewTitle"
      :footer="null"
      @cancel="handleCancel"
    >
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref, toRaw, watch } from 'vue'

import { PlusOutlined } from '@ant-design/icons-vue'
import type { UploadChangeParam, UploadProps } from 'ant-design-vue'
import { message } from 'ant-design-vue'
import { LoginStore } from '../../../../store/login/login'
import { deleteFabricImage } from '../../../../service/main/file/file'

function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export default defineComponent({
  name: 'UploadImage',
  components: {
    PlusOutlined,
  },
  props: {
    imageList: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['uploadImage'],
  setup(props, { emit }) {
    const previewVisible = ref(false)
    const previewImage = ref('')
    const previewTitle = ref('')

    const fileList = ref<any>([])

    watch(
      () => props.imageList,
      (newValue) => {
        fileList.value = newValue.map((item: any) => {
          item.status = 'done'
          return item
        })
      },
    )

    const store = LoginStore()

    const headers = ref({
      authorization: `Bearer ${store.token}`,
    })

    onBeforeMount(() => {
      // 每次挂载前都清空 otherFormValue
      emit('uploadImage', [])
    })

    // 上传事件
    const handleChange = ({ file, fileList }: UploadChangeParam) => {
      if (file.status === 'done' || file.status === 'removed') {
        const imageInfo = fileList.map((item) => {
          item.url = item.response?.data.list[0].url || item.url

          return toRaw(item.response?.data.list) || item
        })

        emit('uploadImage', imageInfo)
      } else if (file.status === 'error') {
        message.error(`${file.name} 图片上传失败`)
      }
    }

    // 移除图片事件
    // UploadProps['fileList'][number]
    const handleRemove = (file: any) => {
      console.log(file)
      const fileName = file.response?.data.list[0].filename || file.imageName
      if (file.fabricId) {
        // 拥有布料ID
        deleteFabricImage(file.fabricId, fileName)
      } else {
        // 新创建的
        deleteFabricImage('new', fileName)
      }
    }

    // 取消预览图片事件
    const handleCancel = () => {
      previewVisible.value = false
      previewTitle.value = ''
    }

    // 预览图片事件
    const handlePreview = async (file: any) => {
      if (!file.url && !file.preview) {
        file.preview = (await getBase64(file.originFileObj)) as string
      }
      previewImage.value = file.url || file.preview
      previewVisible.value = true
      previewTitle.value =
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    }

    return {
      previewVisible,
      previewImage,
      fileList,
      headers,
      handleChange,
      handleRemove,
      handleCancel,
      handlePreview,
      previewTitle,
    }
  },
})
</script>

<style lang="less" scoped>
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
