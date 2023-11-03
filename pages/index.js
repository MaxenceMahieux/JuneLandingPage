import Image from 'next/image';
import JuneLogo from '../public/june.png';
import HeaderBackground from '../public/HeaderBackground.png';
import ChairGirl from '../public/ChairGirl.svg';
import Youtube from '../public/Youtube.png';
import Twitter from '../public/Twitter.png';
import Tiktok from '../public/Tiktok.png';
import Slider from "@/components/Slider";
import Form from "@/components/Form";

export default function Home() {
  return (
      <>
        <header className="flex justify-center mb-72 px-4">
          <Image
              src={HeaderBackground}
              alt="Arrière plan du header"
              className="hidden 2xl:block absolute z-0 inset-0 object-none w-full"
          />
          <div className="text-center mt-12 max-w-lg md:max-w-xl lg:max-w-2xl z-10">
            <Image
                src={JuneLogo}
                alt="Logo de June"
                width={104}
                className="mb-12 mx-auto"
            />
            <p className="text-3xl md:text-4xl lg:text-5xl font-gothic mb-10 font-medium">Bienvenue sur June !</p>
            <p className="font-raleway leading-4 md:leading-6 lg:leading-8 mb-10 text-xs md:text-sm lg:text-base">
              Notre site internet est actuellement en cours de développement, nous vous remercions de bien vouloir patienter. N’hésitez pas à découvrir un ensemble d’informations ci-dessous. Laissez-nous votre adresse mail pour vous prévenir de la sortie !
            </p>
            <div className="max-w-lg mx-auto">
              <div className="flex justify-center">
                <Form />
              </div>
              <p className="font-raleway leading-4 md:leading-6 lg:leading-8 text-xs md:text-sm lg:text-base text-justify w-full">
                L’e-mail sera utilisé uniquement dans le cadre de la notification de la publication du site internet. L’adresse e-mail sera supprimée après envoi de la notification. Pour exercer vos droits, contactez-nous.
              </p>
            </div>
          </div>
        </header>
        <main className="mb-10">
          <div className="flex justify-center relative">
            <Image
                src={ChairGirl}
                alt="Illustration d'une fille assise"
                width={311}
                className="absolute z-20"
            />
            <div className="Ellipse absolute z-0 mt-44">

            </div>
            <div className="paragraphe bg-june z-10 w-full text-center mt-80 px-4">
              <p className="font-gothic mt-4 mb-14 text-2xl lg:text-3xl">Découvrez nous</p>
              <p className="font-raleway text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 max-w-5xl mx-auto mb-14">
                Imaginez un endroit où chaque jeune, entre 13 et 25 ans, peut trouver un refuge sûr, où les parents peuvent trouver un soutien solide. C'est là que June entre en jeu. Depuis 2020, notre association dynamique et engagée offre un soutien socio-psychologique essentiel à travers une gamme variée de services. Chez June, nous allons au-delà des mots. Nous offrons du soutien moral et émotionnel, des thérapies et une prise en charge des urgences psychiatriques. Nos bénévoles, plus de 30 personnes dévouées, guident les jeunes à travers les méandres des démarches administratives et légales, offrent des conseils légaux et assurent un suivi à court et long terme pour une santé mentale au top. Nous ouvrons des portes vers l'avenir avec des orientations externes et intervenons directement dans les écoles pour lutter contre la discrimination et le harcèlement. Ce qui nous rend spéciaux, c'est notre accessibilité. Via notre site internet sécurisé, nous proposons des rendez-vous flexibles, que ce soit par écrit, vocal ou en visio. Nos professionnels, qu'ils soient étudiants ou diplômés, sont là pour aider, écouter et guider. Plus de 1000 jeunes ont déjà bénéficié de notre soutien, et nous sommes prêts à aider encore plus. June n'est pas juste une association, c'est un mouvement. Un mouvement de solidarité, de compréhension et de croissance. Rejoignez-nous dans cette mission. Ensemble, nous créons un avenir où chaque jeune se sent soutenu, compris et prêt à relever tous les défis de la vie.
              </p>
              <a href="https://discord.asso-june.org/" className="inline-block mb-16 py-5 px-11 border rounded-full border-violet-800 font-bold font-raleway hover:text-white hover:bg-violet-800 duration-200 hover:duration-200 hover:drop-shadow-xl">Rejoindre discord</a>
            </div>
          </div>
          <div className="text-center w-full bg-white px-4">
            <p className="py-5 px-11 text-2xl lg:text-3xl font-gothic mt-14 mb-14">Donner pour aider</p>
            <p className="font-raleway text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 max-w-5xl inline-block mb-14">
              Nous vous invitons à devenir un héros de notre temps en rejoignant notre mission noble. Chaque jour, nous travaillons sans relâche pour apporter un changement positif dans la vie des personnes qui en ont le plus besoin. <br/>
              Votre don, aussi petit soit-il, peut avoir un impact immense. Chaque centime compte et chaque geste de générosité nous rapproche un peu plus de notre objectif. <br/>
              Ensemble, nous pouvons créer un monde où la compassion et la solidarité sont les forces motrices du changement. Faites un don aujourd'hui et contribuez à façonner un avenir plus lumineux pour notre société et pour les générations futures. <br/>
              Rejoignez-nous dans cette noble quête. Faites partie de quelque chose de plus grand que vous-même. Faites la différence.
            </p>
            <div className="block">
              <a href="https://www.helloasso.com/associations/june/formulaires/1" className="inline-block mb-16 py-5 px-11 border rounded-full border-violet-800 font-bold font-raleway hover:text-white hover:bg-violet-800 duration-200 hover:duration-200 hover:drop-shadow-xl">Faire un don</a>
            </div>
          </div>
          <div className="bg-june text-center py-14">
            <p className="block py-5 px-11 text-2xl lg:text-3xl font-gothic mb-14">Ils nous soutiennent</p>
            <Slider />
          </div>
        </main>
        <footer className="px-4 md:px-20 lg:px-40">
          <div className="bg-june w-full h-1 rounded-full"></div>
          <div className="mt-7 mx-4 lg:mx-20 sm:flex justify-between">
            <ul className="mb-10 sm:mb-0 text-center sm:text-left">
              <li className="mb-5">
                <p className="font-gothic text-2xl ">Infos pratiques</p>
              </li>
              <li>
                <a href="#" className="font-raleway font-bold">Mentions légales</a>
              </li>
            </ul>
            <ul className="text-center sm:text-left">
              <li className="mb-5">
                <p className="font-gothic text-2xl ">Contactez-nous !</p>
              </li>
              <li className="mb-6">
                <a href="#" className="font-raleway font-bold">Une question ?</a>
              </li>
              <li className="mb-6">
                <a href="#" className="font-raleway font-bold">Envoyez-nous un mail</a>
              </li>
              <li className="mb-6">
                <a href="#" className="font-raleway font-bold">Téléphone : 06 59 45 50 62</a>
              </li>
              <li className="mb-6 flex gap-7 justify-center sm:justify-normal">
                <div>
                  <Image
                      src={Youtube}
                      alt="Logo de Youtube"
                      height={40}
                  />
                </div>
                <div>
                  <Image
                      src={Twitter}
                      alt="Logo de Youtube"
                      height={40}
                  />
                </div>
                <div>
                  <Image
                      src={Tiktok}
                      alt="Logo de Youtube"
                      height={40}
                  />
                </div>
              </li>
            </ul>
          </div>
        </footer>
      </>
  );
}
