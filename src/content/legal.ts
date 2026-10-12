import { contactConfig } from "@/config/contact";
import type { LegalDocument } from "@/types/content";

/**
 * Legal texts. They describe only technologies the site actually uses
 * (no analytics, advertising or tracking cookies). Legal review is pending;
 * see docs/content-verification.md before launch.
 */
const controllerSentence = `Veri sorumlusu MAB Global Partners'tır. Bize ${contactConfig.email} adresinden veya ${contactConfig.address.full} adresinden ulaşabilirsiniz.`;

export const legalDocuments: Record<LegalDocument["key"], LegalDocument> = {
  privacy: {
    key: "privacy",
    intro:
      "Bu politika, MAB Global Partners web sitesini ziyaret ettiğinizde ve bizimle iletişime geçtiğinizde kişisel verilerinizin nasıl işlendiğini açıklar.",
    sections: [
      {
        heading: "Veri sorumlusu",
        paragraphs: [controllerSentence],
      },
      {
        heading: "Topladığımız bilgiler",
        paragraphs: [
          "İletişim formunu kullandığınızda adınızı, e-posta adresinizi, isteğe bağlı olarak şirket veya marka adınızı, ilgilendiğiniz hizmeti, faaliyet alanınızı ve mesajınızı alırız.",
          "Web sitesinin güvenli çalışması için barındırma altyapımız IP adresi, tarayıcı bilgisi ve istek zamanı gibi teknik kayıtları sınırlı bir süre tutar.",
        ],
      },
      {
        heading: "Bilgileri kullanma amaçlarımız",
        paragraphs: [
          "Topladığımız bilgileri yalnızca aşağıdaki amaçlarla kullanırız.",
        ],
        list: [
          "Danışmanlık talebinizi değerlendirmek ve size yanıt vermek",
          "Talep ettiğiniz hizmete ilişkin ön görüşmeyi planlamak",
          "Web sitesinin güvenliğini sağlamak ve kötüye kullanımı önlemek",
          "Yasal yükümlülüklerimizi yerine getirmek",
        ],
      },
      {
        heading: "Bilgilerin paylaşılması",
        paragraphs: [
          "Kişisel verilerinizi satmayız ve pazarlama amacıyla üçüncü kişilerle paylaşmayız.",
          "Web sitesi barındırma ve form iletilerinin e-posta ile teslimi için hizmet sağlayıcılardan destek alırız. Bu sağlayıcıların sunucuları yurt dışında bulunabilir. Aktarımlar 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun yurt dışına aktarıma ilişkin hükümlerine uygun şekilde yapılır.",
        ],
      },
      {
        heading: "Saklama süresi",
        paragraphs: [
          "İletişim talepleri, talebin değerlendirilmesi ve olası hizmet ilişkisinin yürütülmesi için gereken süre boyunca saklanır. Hizmet ilişkisi kurulmayan talepler makul bir süre sonunda silinir.",
        ],
      },
      {
        heading: "Haklarınız",
        paragraphs: [
          "Kişisel verilerinizle ilgili haklarınızı ve başvuru yöntemini KVKK Aydınlatma Metni'nde bulabilirsiniz.",
        ],
      },
      {
        heading: "Değişiklikler",
        paragraphs: [
          "Bu politikayı web sitesinde kullanılan teknolojiler veya veri işleme süreçlerimiz değiştiğinde güncelleriz. Güncel tarih sayfanın başında yer alır.",
        ],
      },
    ],
  },
  cookies: {
    key: "cookies",
    intro:
      "Bu sayfa, MAB Global Partners web sitesinde çerezlerin ve benzeri teknolojilerin nasıl kullanıldığını açıklar.",
    sections: [
      {
        heading: "Kullandığımız çerezler",
        paragraphs: [
          "Web sitemiz şu anda analiz, reklam veya kullanıcı takibi amacıyla çerez kullanmaz. Bu nedenle sitede bir çerez tercih paneli bulunmaz.",
          "Yazı tipleri web sitemizin kendi sunucusundan yüklenir. Sayfaları görüntülediğinizde yazı tipi sağlayıcısına herhangi bir istek gönderilmez.",
        ],
      },
      {
        heading: "Tarayıcı depolaması",
        paragraphs: [
          "İletişim formu, gönderim sırasında yalnızca formun çalışması için gereken bilgileri tarayıcı belleğinde geçici olarak tutar. Bu bilgiler sayfayı kapattığınızda silinir.",
        ],
      },
      {
        heading: "Gelecekteki değişiklikler",
        paragraphs: [
          "Web sitesine analiz veya benzeri bir araç eklenmesi durumunda bu politikayı güncelleyecek ve gerekli olduğu durumlarda onayınızı alacağız.",
        ],
      },
      {
        heading: "Çerezleri yönetme",
        paragraphs: [
          "Tarayıcınızın ayarlarından çerezleri dilediğiniz zaman görüntüleyebilir ve silebilirsiniz.",
        ],
      },
    ],
  },
  kvkk: {
    key: "kvkk",
    intro:
      "Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 10. maddesi uyarınca iletişim formu ve e-posta yoluyla paylaştığınız kişisel verilere ilişkin bilgilendirme amacıyla hazırlanmıştır.",
    sections: [
      {
        heading: "Veri sorumlusu",
        paragraphs: [controllerSentence],
      },
      {
        heading: "İşlenen kişisel veriler",
        paragraphs: [
          "Kimlik bilgisi olarak adınızı ve soyadınızı, iletişim bilgisi olarak e-posta adresinizi, talep bilgisi olarak şirket veya marka adınızı, ilgilendiğiniz hizmeti, faaliyet alanınızı ve mesajınızı işleriz. Güvenlik amacıyla IP adresi ve istek zamanı gibi işlem güvenliği bilgileri de işlenir.",
        ],
      },
      {
        heading: "İşleme amaçları",
        paragraphs: [
          "Kişisel verileriniz danışmanlık talebinizin değerlendirilmesi, sizinle iletişime geçilmesi, ön görüşmenin planlanması ve web sitesinin güvenliğinin sağlanması amaçlarıyla işlenir.",
        ],
      },
      {
        heading: "Hukuki sebepler",
        paragraphs: [
          "Kişisel verileriniz Kanun'un 5. maddesinin ikinci fıkrasında yer alan bir sözleşmenin kurulmasıyla doğrudan ilgili olması ve temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatimiz için zorunlu olması hukuki sebeplerine dayanılarak işlenir.",
        ],
      },
      {
        heading: "Toplama yöntemi",
        paragraphs: [
          "Kişisel verileriniz web sitemizdeki iletişim formu ve e-posta yoluyla elektronik ortamda toplanır.",
        ],
      },
      {
        heading: "Aktarım",
        paragraphs: [
          "Kişisel verileriniz web sitesinin barındırılması ve form iletilerinin e-posta ile teslim edilmesi amacıyla hizmet aldığımız ve sunucuları yurt dışında bulunabilen hizmet sağlayıcılara Kanun'un 9. maddesine uygun şekilde aktarılabilir. Yasal bir zorunluluk bulunması halinde yetkili kamu kurumlarıyla paylaşılabilir.",
        ],
      },
      {
        heading: "Haklarınız",
        paragraphs: [
          "Kanun'un 11. maddesi uyarınca aşağıdaki haklara sahipsiniz.",
        ],
        list: [
          "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
          "İşlenmişse buna ilişkin bilgi talep etme",
          "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
          "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
          "Eksik veya yanlış işlenmişse düzeltilmesini isteme",
          "Kanun'da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme",
          "Düzeltme, silme veya yok etme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme",
          "Otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme",
          "Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme",
        ],
      },
      {
        heading: "Başvuru",
        paragraphs: [
          `Haklarınıza ilişkin taleplerinizi ${contactConfig.email} adresine e-posta göndererek iletebilirsiniz. Başvurunuzu en geç otuz gün içinde sonuçlandırırız.`,
        ],
      },
    ],
  },
  legalNotice: {
    key: "legalNotice",
    intro:
      "Bu web sitesindeki içerikler MAB Global Partners tarafından genel bilgilendirme amacıyla yayımlanır.",
    sections: [
      {
        heading: "Bilgilendirme amacı",
        paragraphs: [
          "Web sitesindeki hizmet açıklamaları ve Bilgi Merkezi rehberleri genel bilgi sunar ve kişisel hukuki, vergisel veya mali danışmanlık yerine geçmez.",
          "Şirket kuruluşu ve vergi yükümlülükleri ilgili ülkenin ve eyaletin mevzuatına ve kişisel durumunuza göre değişir. Karar vermeden önce durumunuzun ayrıntılı olarak değerlendirilmesini öneririz.",
        ],
      },
      {
        heading: "Taahhüt sınırları",
        paragraphs: [
          "Resmi kurumların işlem süreleri, banka ve ödeme kuruluşlarının hesap onayları ve vergi sonuçları ilgili kurumların değerlendirmesine bağlıdır. Bu konularda kesin süre veya sonuç taahhüdü vermeyiz.",
        ],
      },
      {
        heading: "Güncellik",
        paragraphs: [
          "İçeriklerimizi düzenli olarak gözden geçiririz. Mevzuat değişiklikleri nedeniyle bazı bilgiler güncelliğini yitirebilir. Rehberlerin yayın ve güncelleme tarihleri ilgili sayfada yer alır.",
        ],
      },
      {
        heading: "Fikri mülkiyet",
        paragraphs: [
          "Web sitesindeki metinler, tasarım ve görseller MAB Global Partners'a aittir ve izin alınmadan ticari amaçla kullanılamaz.",
        ],
      },
      {
        heading: "Dış bağlantılar",
        paragraphs: [
          "Web sitemizde resmi kurumların ve iş ortaklarımızın sayfalarına bağlantılar bulunur. Bu sayfaların içeriğinden ilgili kurumlar sorumludur.",
        ],
      },
    ],
  },
};
