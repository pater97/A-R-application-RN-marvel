import React, {useState} from 'react';
import {EventSubscriptionVendor, StyleSheet, View} from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  Viro360Image,
  Viro3DObject,
  ViroAmbientLight,
  ViroCamera,
} from '@viro-community/react-viro';

// lobby
const BACKGROUND = require('./assets/lobby.jpeg');
// logo avengers
const LOGO = require('./assets/marvel_logo.glb');
// character
const HULK = require('./assets/hulk_from_the__marvel_cinematic_universe.glb');
const IRONMAN = require('./assets/iron_man__fortnite_bp_skin__fortnite_x_marvel.glb');
const CAPTAINAMERICA = require('./assets/captain_america.glb');
const THOR = require('./assets/marvel_thor_free.glb');
const ANTMAN = require('./assets/ant_man__fortnite_marvel_collab_skin.glb');
const DAREDEVIL = require('./assets/dare_devil__fortnite_marvel_collab_skin.glb');
const DEADPOOL = require('./assets/marvel_character_-_deadpool.glb');
const SPIDERMAN = require('./assets/spider-man__fortnite_chapter_2_season_1_bp_skin.glb');
const VENOM = require('./assets/venom_marvel_super_war.glb');
const PLANE = require('./assets/fortnite_marvel_quinjet.glb');
// const WOLVERINE = require('./assets/wolverine_ultimate_marvel_super_war.glb');
// const CAPATAINMARVEL = require('./assets/captain_marvel.glb');

const initialScene = () => {
  return (
    <ViroARScene>
      {/* <ViroCamera active={true} position={[0, 0, 0]} /> */}
      <ViroAmbientLight color={'#FFFFFF'} intensity={400} />
      <Viro360Image source={BACKGROUND} rotation={[0, 90, 0]} />
      {/* LOGO AVENGERS */}
      <Viro3DObject
        source={LOGO}
        position={[0, 0, -8]}
        scale={[0.01, 0.01, 0.01]}
        rotation={[0, 0, 0]}
        type="GLB"
      />
      {/* AVENGER CHARACTER */}
      <Viro3DObject
        source={IRONMAN}
        position={[-1.5, -2, -7]}
        scale={[1.15, 1.15, 1.15]}
        rotation={[90, 0, 0]}
        type="GLB"
        onClick={() => {
          console.log('cliccato');
        }}
      />
      <Viro3DObject
        source={ANTMAN}
        position={[0, -2, -6.5]}
        scale={[0.000018, 0.000018, 0.000018]}
        rotation={[90, 0, 0]}
        type="GLB"
        onClick={() => {
          console.log('cliccato');
        }}
      />
      <Viro3DObject
        source={CAPTAINAMERICA}
        position={[-4, -2, -7]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
        type="GLB"
        onClick={() => {
          console.log('cliccato');
        }}
      />
      <Viro3DObject
        source={SPIDERMAN}
        position={[-6, -2, -5.5]}
        scale={[0.018, 0.018, 0.018]}
        rotation={[90, 40, 0]}
        type="GLB"
        onClick={() => {
          console.log('cliccato');
        }}
      />
      <Viro3DObject
        source={VENOM}
        position={[-6.3, -2, -2]}
        scale={[5, 5, 5]}
        rotation={[0, 90, 0]}
        type="GLB"
        onClick={() => {
          console.log('cliccato');
        }}
      />
      <Viro3DObject
        source={HULK}
        position={[5, -2, -7]}
        scale={[3, 3, 3]}
        rotation={[0, -20, 0]}
        type="GLB"
        onClick={() => {
          console.log('cliccato');
        }}
      />
      <Viro3DObject
        source={DAREDEVIL}
        position={[10, -2.3, -2]}
        scale={[0.00023, 0.00023, 0.00023]}
        rotation={[90, -90, 0]}
        type="GLB"
        onClick={() => {
          console.log('cliccato');
        }}
      />
      <Viro3DObject
        source={DEADPOOL}
        position={[5, -2.3, -4]}
        scale={[0.021, 0.021, 0.021]}
        rotation={[0, 200, 0]}
        type="GLB"
        onClick={() => {
          console.log('cliccato');
        }}
      />
      <Viro3DObject
        source={THOR}
        position={[1.5, -2, -7]}
        scale={[0.65, 0.65, 0.65]}
        rotation={[0, -90, 0]}
        type="GLB"
        onClick={() => {
          console.log('cliccato');
        }}
      />
      <Viro3DObject
        source={PLANE}
        position={[0, -2, 180]}
        scale={[0.05, 0.05, 0.05]}
        rotation={[0, 0, 0]}
        type="GLB"
        onClick={() => {
          console.log('cliccato');
        }}
      />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      initialScene={{
        scene: initialScene,
      }}
      style={{flex: 1}}
    />
  );
};

var styles = StyleSheet.create({});
