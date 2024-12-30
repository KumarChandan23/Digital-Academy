import { IMG } from "../images"
import TrustedDataList from "./trustedProgramDataList"

export const TrustedProgramData = ()=>{
    const programData = [
        { brand_image: IMG.FACEBOOK, rating: 4.5 },
        { brand_image: IMG.SULEKHA, rating: 5 },
        { brand_image: IMG.AMBITIONBOX, rating: 4.9 },
        { brand_image: IMG.TRUSTPILOT, rating: 4.8 },
        { brand_image: IMG.SITEJABBER, rating: 4.8 },
      ];
    return <TrustedDataList trustedData={programData} />
}