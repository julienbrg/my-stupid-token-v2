import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import {parseEther} from 'ethers/lib/utils';

describe("My Stupid Token", function () {

  async function deployContractsFixture() {
    const [alice, bob] = await ethers.getSigners();
    const MST = await ethers.getContractFactory("MyStupidToken");
    const mst = await MST.deploy(parseEther('10000'));
    await mst.deployed();
    return { mst, alice, bob };
  }

  describe("Interactions", function () {
    it("Should transfer 1 MST from Alice to Bob", async function () {
      const { mst, alice, bob } = await loadFixture(deployContractsFixture);
      await mst.connect(alice as any).transfer(bob.address, parseEther('1'));
      expect(await mst.balanceOf(bob.address)).to.equal(parseEther('1'));
    });
  });
});
