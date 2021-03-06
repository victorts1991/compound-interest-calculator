import React, { useRef, useState } from 'react'
import { BannerAd, BannerAdSize } from '@react-native-admob/admob'
import { adMobUnitId } from '../../settings/AdMobUnitId'

import { Container, AdContainer } from './styles'

export function BannerAdMob() {

  const [ bannerIsLoaded, setBannerIsLoaded ] = useState(false)

  const bannerRef = useRef(null);
  return (
    <Container>
      <AdContainer haveFlex={bannerIsLoaded}>
        <BannerAd
          style={{ width: '100%' }}
          size={BannerAdSize.BANNER}
          unitId={adMobUnitId}
          onAdFailedToLoad={(error) => setBannerIsLoaded(false) }
          onAdLoaded={() => setBannerIsLoaded(true) }
          ref={bannerRef}
        />
      </AdContainer>
    </Container>
  );
}