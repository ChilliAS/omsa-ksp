import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Let's Go!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="One Man Space Agency">
      <HomepageHeader />
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '4rem 2rem',
        fontFamily: 'var(--ifm-font-family-base)',
        lineHeight: '1.6',
        color: 'var(--ifm-color-content)'
      }}>
		<section>
          <p>
            Most people experience <em>Kerbal Space Program</em> as a game of trial and error—strapping on more boosters until something works. The <strong>One Man Space Agency (OMSA)</strong> takes a different approach.
          </p>
          <p>
            This is a digital engineering logbook documenting a "Realistic Progression One" (RP-1) campaign where every mission is treated as an engineering project. The focus is on the whole engineering lifecycle, and managing the project, rather than just the flight itself.
          </p>

          <hr style={{ margin: '3rem 0', borderColor: 'var(--ifm-color-emphasis-200)' }} />

          <h3>The "One Man"</h3>
          <p>
            I am a Master's Aerospace Engineering student - specialised in spacecraft engineering - based in the UK.
          </p>
          <p>
            This project is a way to combine my enjoyment of Kerbal Space Program, arguably the inspiration for my 'astro' career, with real engineering methodologies to both improve my own skills & knowlege - but also to share it with anyone interested enough (or bored enough!).
	      </p>
		  
		  <hr style={{ margin: '3rem 0', borderColor: 'var(--ifm-color-emphasis-200)' }} />

          <h3>The Mission</h3>
          <p>
			The goal is to carry out this playthrough as 'realistically' as possible - as far as can be done with one guy, a bit of a spare time, and a 'video game' setup that may possibly be more mod than original.
			
          </p>
          <p>We are using a modpack based on <strong>Realism Overhaul</strong>, <strong>RP-1</strong>, and <strong>Principia</strong> - with a few tweaks. This means:</p>
          <ul>
            <li><strong>N-Body Physics:</strong> Gravity from other bodies matter. Orbit planning gets real.</li>
            <li><strong>Real Fuels:</strong> Propellant chemistry as seen in - real life. Cryogenics boil off; ullage is a problem; engines have limited ignitions.</li>
            <li><strong>Signal Delay:</strong> Light lag is real. Probes must be autonomous.</li>
            <li><strong>Failure is an Option:</strong> Engines fail. Tanks rupture. TestFlight brings risk and reliability into the equation.</li>
          </ul>

        </section>

        
      </main>
    </Layout>
  );
}
