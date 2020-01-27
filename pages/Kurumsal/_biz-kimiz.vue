<template>
  <div class="container-text">
    <div class="text-group">
      <h1>BİZ KİMİZ ?</h1>
    </div>
    <div class="text-group">
      <p>
        <b>MarblingWeb</b> Kocaeli İzmit'te , '99 yılından bu yana ihtisasını Bilgisayar Programcılığı ve Teknolojileri üzerine yapmış bizlerin kurduğu , hiç bir zaman "bitti" demeyerek sürekli araştırmalar yapıp "öğrenmenin" sonu yoktur politikasını ilke edinmiş bir oluşumdur.
      </p>
    </div>
    <div class="text-group">
      <h2>SİZLERLE ORTAK ÇALIŞIYORUZ</h2>
      <p>
        Bizler bu işi keyif alarak yapıyoruz. Bu nedenle üstlenmiş olduğumuz projelerin tasarımlarını yaparken hazır paket yazılımlar (template) kullanmıyoruz. Bunun yerine boş bir sayfa ile başlayarak tamamen "siz müşterilerimizin" hayal gücünün vermiş olduğu istekler doğrultusunda hareket ederek yani <b>"sizinle ortak çalışarak"</b> projelerimizi tamamlıyoruz.
      </p>
    </div>
    <div class="text-group">
      <p>
        Böylece tamamen sizlerin talepleri üzerine kurulmuş , bizlerin bilgi ve tecrübelerine dayanarak kitlenize hitap eden bakış açısı ile düşünülmüş projeleri ortaya çıkartmış oluyoruz.
      </p>
    </div>
    <div class="text-group">
      <p>
        Proje teslimi sonrasında vedalaşmıyoruz , zira bizim için en önemli unsurlardan biri ise <b>"teslim sonrası"</b> yani proje teslimi sonrasında dilediğiniz zaman ulaşılabilir olmaktır. Bunun güvencesini sizlere rahatlıkla verebiliyoruz çünkü <b>MarblingWeb</b> olarak biz bu konuda kendimize fazlasıyla güveniyoruz.
      </p>
    </div>
    <div class="text-group">
      <h2><i class="el-icon-price-tag" /> Taglar</h2>
      <h5 class="tags">
        {{ config.htag }}
      </h5>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      meta: { title: 'MarblingWeb Kimdir ? ', image: '/assets/files/img/webdesign6.jpg', url: 'biz-kimiz' }
    }
  },
  computed: {
    ...mapGetters({
      config: 'webconfig/config'
    })
  },
  created () {
    this.$emit('SET_TITLE', this.meta)
  }
}
</script>
