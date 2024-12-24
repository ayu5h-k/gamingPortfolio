import React from "react";
import aphelios201 from "./Aphelios-20.jpg";
import darkCosmicJhin1 from "./jhin.jpeg";
import kaisa2911 from "./Kaisa-29.jpg";
import leesin311 from "./LeeSin-31.jpg";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="navbar">
          <div className="n">N1GHTM4R3</div>

          <div className="about">About</div>

          <div className="op-gg">OP.GG</div>

          <div className="contact">Contact</div>
        </div>

        <div className="hero">
          <img
            className="dark-cosmic-jhin"
            alt="Dark cosmic jhin"
            src={darkCosmicJhin1}
          />

          <p className="and-now-the-curtain">
            &#34;and Now, The Curtain Rises.&#34;
          </p>

          <p className="text-wrapper">
            This webpage, which displays my champion pool, rank accomplishments,
            and special occasions that mark my Rift adventure, is proof of my
            love for League of Legends.
          </p>
        </div>

        <div className="challenge-button">
          <div className="overlap-group">
            <div className="rectangle" />

            <div className="rectangle-2" />

            <div className="CHALLENGE">Challenge!</div>

            <div className="text-wrapper-2">Wanna do a 1v1?</div>
          </div>
        </div>

        <div className="content">
          <div className="view">
            <p className="i-play-lee-sin-in">
              I play Lee Sin in the jungle because he&#39;s the ultimate
              early-game playmaker. With his mobility, high-damage combos, and
              excellent gap-closing abilities, Lee Sin thrives at setting up
              early ganks that put my team ahead. His kit allows me to control
              the tempo of the game, punishing overextended laners and securing
              crucial objectives. Plus, there’s nothing more satisfying than
              pulling off a flashy Insec kick to turn the tide of a fight or
              leaving the enemy jungler wondering what just happened. For me,
              playing Lee Sin isn’t just about mechanics—it’s about giving my
              team the momentum to dominate.
            </p>

            <div className="lee-sin">Lee Sin</div>

            <img className="leesin" alt="Leesin" src={leesin311} />
          </div>

          <img className="kaisa" alt="Kaisa" src={kaisa2911} />

          <img className="aphelios" alt="Aphelios" src={aphelios201} />

          <div className="kai-sa">Kai’sa</div>

          <div className="text-wrapper-3">Aphelios</div>
        </div>

        <footer className="footer">
          <div className="n-ghtm-r">N1GHTM4R3</div>

          <div className="frame">
            <div className="text-wrapper-4">N1ghtm4r3</div>
          </div>

          <div className="text-wrapper-5">About</div>

          <div className="text-wrapper-6">Discord</div>

          <div className="text-wrapper-7">Youtube</div>

          <div className="text-wrapper-8">Instagram</div>

          <div className="OP-GG">Op.gg</div>

          <div className="text-wrapper-9">Contact</div>
        </footer>

        <div className="rectangle-3" />

        <div className="rectangle-4" />

        <div className="setup-champpool">
          <div className="overlap">
            <div className="rectangle-5" />

            <div className="rectangle-6" />

            <div className="setup">
              <div className="text-wrapper-10">Setup</div>

              <div className="text-wrapper-11">Champ Pool</div>

              <p className="they-say-it-s-not">
                They say it&#39;s not the gear, it&#39;s the player... but let’s
                be honest, my setup does at least 50% of the carrying.
              </p>

              <div className="text-wrapper-12">ADC</div>

              <div className="text-wrapper-13">JG</div>

              <p className="MSI-laptop">
                MSI GF63 Laptop
                <br />
                Logitech G102 Gaming Mouse
                <br />
                Redragon K617 Fizz RGB Gaming Keyboard
                <br />
                HyperX Cloud Stinger 2 - Gaming Headset
              </p>

              <div className="aphelios-lucian">
                Aphelios
                <br />
                Lucian
                <br />
                Samira
                <br />
                Kai’Sa
                <br />
                Ezreal
                <br />
                Jhin
              </div>

              <div className="lee-sin-viego-kha">
                Lee Sin
                <br />
                Viego
                <br />
                Kha’Zix
                <br />
                Ekko
                <br />
                Nidalee
                <br />
                Elise
                <br />
                Rengar
              </div>

              <p className="these-are-the">
                These are the champions I trust to carry games, frustrate
                enemies, and sometimes even make my teammates question their
                life choices. Whether it&#39;s landing clutch plays or...
                occasionally missing skill shots, this is my trusted arsenal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
