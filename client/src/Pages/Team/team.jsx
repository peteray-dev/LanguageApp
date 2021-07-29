import React, { Component } from 'react';
import './team.css';
import TestImg from '../../Assets/images/team.jpg';

import NavFront from '../LandingPage/NavFront';
import Footer from '../LandingPage/FooterFront';

class Team extends Component {
  state = {
    team: [
      {
        id: 1,
        name: 'Smith',
        position: 'developer',
        img: TestImg,
        biography:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe perferendis adipisci inventore numquam fugit deserunt iusto ea repellendus praesentium at, recusandae, quibusdam debitis ad maiores nam placeat vero voluptatem.',
      },
      {
        id: 2,
        name: 'jess',
        position: 'developer',
        img: TestImg,
        biography:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe perferendis adipisci inventore numquam fugit deserunt iusto ea repellendus praesentium at, recusandae, quibusdam debitis ad maiores nam placeat vero voluptatem.',
      },
      {
        id: 3,
        name: 'joe',
        position: 'developer',
        img: TestImg,
        biography:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe perferendis adipisci inventore numquam fugit deserunt iusto ea repellendus praesentium at, recusandae, quibusdam debitis ad maiores nam placeat vero voluptatem.',
      },
      {
        id: 4,
        name: 'jess',
        position: 'developer',
        img: TestImg,
        biography:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe perferendis adipisci inventore numquam fugit deserunt iusto ea repellendus praesentium at, recusandae, quibusdam debitis ad maiores nam placeat vero voluptatem.',
      },
      {
        id: 5,
        name: 'joe',
        position: 'developer',
        img: TestImg,
        biography:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe perferendis adipisci inventore numquam fugit deserunt iusto ea repellendus praesentium at, recusandae, quibusdam debitis ad maiores nam placeat vero voluptatem.',
      },
    ],
  };
  render() {
    return (
      <>
      <NavFront/>
        <section class="ftco-section bg-half-light" style={{marginTop: '90px'}}>
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 text-center heading-section ftco-animated">
                <h2 className="mb-4">Our Team</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, error sed assumenda perferendis maiores odit ullam
                tenetur numquam tempore quos atque enim magni eius expedita
                odio, fugit aut! Iste, necessitatibus? Deserunt repellat porro
                tempora, et delectus enim atque natus harum, nam aspernatur
                magni. Maiores, quae! Voluptatem repellat dicta similique
                voluptas alias corrupti dignissimos commodi officiis? Esse quia
                cum sequi quibusdam! Saepe, commodi ipsum nulla omnis officiis
                itaque molestiae non cum sit distinctio fugiat magnam officia
                temporibus dignissimos nam quis consequuntur libero id
                asperiores iste nostrum eaque iusto assumenda? Cupiditate,
                aliquam. Dicta dolore soluta ipsa quos porro natus recusandae
                ratione nisi eius voluptatum consectetur, enim dolores, ipsam
                nesciunt quibusdam sint rerum aspernatur! Labore odio pariatur
                consequuntur itaque harum veritatis, dolorum cumque? Ex velit
                earum illum ipsa dolorum. Ad odio minima ex. Ullam excepturi
                iusto officia perspiciatis porro facere. Debitis maxime soluta
                explicabo a. Nobis debitis doloribus exercitationem numquam
                corrupti vitae saepe.
              </p>
            </div>
            <div className="row mb-5">
              {this.state.team.map((item) => {
                return (
                  <div className="col-lg-4 col-sm-12 " key={item.id}>
                    <div className="block-2 ftco-animated">
                      <div className="flipper">
                        <div
                          className="front"
                          style={{
                            backgroundImage: `url(${item.img})`,
                          }}
                        >
                          <div className="box">
                            <h2>{item.name}</h2>
                            <p>{item.position}</p>
                          </div>
                        </div>
                        <div className="back">
                          <blockquote>
                            <p>&ldquo;{item.biography} &rdquo;</p>
                          </blockquote>
                          <div className="author d-flex">
                            <div className="image align-self-center">
                              <img src={item.img} alt="" />
                            </div>
                            <div className="name align-self-center ml-3">
                              {item.name}
                              <span className="position">{item.position}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>{' '}
          </div>
        </section>

        <Footer/>
      </>
    );
  }
}

export default Team;
