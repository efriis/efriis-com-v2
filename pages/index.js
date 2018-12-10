import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                        <header className="major">
                            <h3>About Me</h3>
                            <p>Who is Erick Friis?</p>
                        </header>
                        <Link href="/about"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                        <header className="major">
                            <h3>GLASS</h3>
                            <p>My Masters Thesis Work at Akamai</p>
                        </header>
                        <Link href="/glass"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Freelancing</h3>
                            <p>Let's work together!</p>
                        </header>
                        <Link href="/freelancing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                        <header className="major">
                            <h3>MIT Explorer</h3>
                            <p>My team's work for Ian Waitz's "Designing the First Year" class at MIT</p>
                        </header>
                        <Link href="/mit-explorer"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic05.jpg')`}}>
                        <header className="major">
                            <h3>Droning</h3>
                            <p>Various Media from my Mavic Pro</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic06.jpg')`}}>
                        <header className="major">
                            <h3>Older Projects</h3>
                            <p>From High School and Earlier</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Current Work</h2>
                        </header>
                        <p>I'm currently finishing up my <strong>M.Eng.</strong> in Electrical Engineering and Computer Science at <strong>MIT</strong>. I'm writing my <a href="/glass">thesis on online anomaly detection for distributed systems</a> at <strong>Akamai Technologies</strong>. My thesis advisors are <a href="https://www.linkedin.com/in/ron-chaney-9457272/">Ron Chaney</a> and <a href="http://people.csail.mit.edu/katrina/">Katrina LaCurts.</a></p>
                        <p>This spring, I will be a teaching assistant in a graduate class called <a href="http://css.csail.mit.edu/6.858/">Computer Systems Security (6.858)</a> working under <a href="https://pdos.csail.mit.edu/~rtm/">Robert Morris</a> and <a href="https://pdos.csail.mit.edu/~kaashoek/">Frans Kaashoek.</a></p>
                        <p>Next summer, I'll be moving out to <strong>San Francisco</strong> to start working on the future of computational problem solving at <strong>Instabase</strong>.</p>
                        <ul className="actions">
                            <li><Link href="/about"><a className="button next">More About Me</a></Link></li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
