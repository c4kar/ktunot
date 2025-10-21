import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir} class="internal">{i18n(cfg.locale).pages.error.home}</a>
      <blockquote cite="https://www.elise.com/quotes/heinlein_-_specialization_is_for_insects">
        Bir insan; bebek bezi değiştirebilmeli, bir istilayı planlayabilmeli, bir domuzu kesebilmeli, bir gemiyi idare edebilmeli, bir bina tasarlayabilmeli, bir sone yazabilmeli, hesapları dengeleyebilmeli, bir duvar örebilmeli, bir kemiği yerine oturtabilmeli, ölmekte olana teselli verebilmeli, emir alabilmeli, emir verebilmeli, iş birliği yapabilmeli, tek başına hareket edebilmeli, denklemler çözebilmeli, yeni bir sorunu analiz edebilmeli, gübre saçabilmeli, bir bilgisayar programlayabilmeli, lezzetli bir yemek pişirebilmeli, etkili bir şekilde dövüşebilmeli ve onurlu bir şekilde ölebilmelidir. Uzmanlık böcekler içindir.
        <footer>— <cite>Robert A. Heinlein</cite></footer>
      </blockquote>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
