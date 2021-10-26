import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
import abi from "./utills/WavePortal.json";
import { Card, Col, Row } from "react-bootstrap";

export default function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasWallet, setHasWallet] = useState(false);
  const [totalWaves, setTotalWaves] = useState(0);
  const [userMessage, setUserMessage] = useState(0);
  const [userLink, setUserLink] = useState(0);

  const [allWaves, setAllWaves] = useState([]);
  const contractAddress = "0xfeDee730EBDEcfA2B8e2AC016DF74f5998C21DDc";
  const contractABI = abi.abi;

  const getAllWaves = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        /*
         * Call the getAllWaves method from your Smart Contract
         */
        const waves = await wavePortalContract.getAllWaves();

        /*
         * We only need address, timestamp, and message in our UI so let's
         * pick those out
         */
        let wavesCleaned = [];
        waves.forEach((wave) => {
          wavesCleaned.push({
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message,
            link: wave.link,
          });
        });

        /*
         * Store our data in React State
         */
        setAllWaves(wavesCleaned);
        setTotalWaves(wavesCleaned.length);
        console.log("setAllWaves", wavesCleaned);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setHasWallet(false);
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setHasWallet(true);
        setCurrentAccount(account);
        getAllWaves();
      } else {
        setHasWallet(false);
        console.log("No authorized account found");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalWaves = async () => {
    setLoading(true);
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        console.log("wavePortalContract", signer);

        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        let count = await wavePortalContract.functions.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());
        // setTotalWaves(count.toNumber() ? count.toNumber() : 0)
        setLoading(false);
      } else {
        setLoading(false);
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const wave = async () => {
    setLoading(true);
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());

        /*
         * Execute the actual wave from your smart contract
         */
        const waveTxn = await wavePortalContract.wave(userMessage, userLink, {
          gasLimit: 300000,
        });
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);

        count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());
        // setTotalWaves(count.toNumber() ? count.toNumber() : 0)
        setUserMessage("");

        await getAllWaves();

        setLoading(false);
      } else {
        console.log("Ethereum object doesn't exist!");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  React.useEffect(async () => {
    checkIfWalletConnected();
    getTotalWaves();
  }, []);

  function getYoutubeId(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }

  if (!hasWallet) {
    return (
      <div className="mainContainer">
        <div className="dataContainer">
          <img
            style={{ width: "80%" }}
            src="https://i.ytimg.com/vi/UkzCHCN0Tj8/maxresdefault.jpg"
          />
          <div className="header">
            Share your favourite wrestling moments with me! 🤯
          </div>

          <div className="bio">
            Share your favourite wrestling moment and get a chance to win 0.001
            ETH 😨
          </div>

          {!loading ? (
            <button className="waveButton" onClick={wave}>
              Connect Wallet
            </button>
          ) : (
            <button className="waveButton">Loading</button>
          )}

          {allWaves.map((wave, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#fbfbfb",
                  marginTop: "16px",
                  padding: "8px",
                }}
              >
                <div>
                  <p style={{ color: "red" }}>Message:</p> {wave.message}
                </div>
                <br />
                <div>Address: {wave.address}</div>
                <div>Time: {wave.timestamp.toString()}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mainContainer">
        <div className="dataContainer">
          <img
            style={{ width: "80%" }}
            src="https://i.ytimg.com/vi/UkzCHCN0Tj8/maxresdefault.jpg"
          />
          <div className="header">
            Share your favourite wrestling moments with me! 🤯
          </div>

          <div className="bio">
            Share your favourite wrestling moment and get a chance to win 0.001
            ETH 😨
          </div>

          <div className="bio">Total waves {totalWaves}</div>

          <input
            placeholder="Enter youtube link"
            type="text"
            onChange={(e) => {
              setUserLink(e.target.value);
              console.log("test", userMessage);
            }}
          />

          <input
            placeholder="Enter message"
            type="text"
            onChange={(e) => {
              setUserMessage(e.target.value);
              console.log("test", userMessage);
            }}
          />

          {!loading ? (
            <button className="waveButton" onClick={wave}>
              Send link
            </button>
          ) : (
            <button className="waveButton">Loading</button>
          )}

          {allWaves.map((wave, index) => {
            return (
              <Card
                key={index}
                style={{
                  width: "425px",
                  background: "white",
                  justifyContent: "ceneter",
                  padding: 10,
                  margin: 10,
                }}
              >
                <iframe
                  width="420"
                  height="315"
                  src={`https://www.youtube.com/embed/${getYoutubeId(
                    wave.link
                  )}`}
                  frameborder="0"
                  allowfullscreen
                ></iframe>

                <Card.Body style={{ height: "200px" }}>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Message
                  </Card.Title>
                  <Card.Text>{wave.message}</Card.Text>

                  <Card.Text style={{ fontSize: 10 }}>
                    Address: {wave.address}
                  </Card.Text>
                  <Card.Text style={{ fontSize: 10 }}>
                    Time: {wave.timestamp.toString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}
