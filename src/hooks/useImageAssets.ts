import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { SITE_IMAGE_ASSETS_QUERY } from '../data/queries';
import { SiteImageAssetsQuery, SiteImageAsset } from '../types/cms';

export interface UseImageAssetsResult {
  assets: SiteImageAsset[];
  loading: boolean;
  error: any;
  getAsset: (key: string) => SiteImageAsset | undefined;
  getAssetsByPrefix: (prefix: string) => SiteImageAsset[];
  getImageUrl: (key: string, isDarkMode?: boolean) => string | undefined;
}

/**
 * Hook to fetch and manage site image assets from Contentful
 */
export const useImageAssets = (): UseImageAssetsResult => {
  const { data, loading, error } = useQuery<SiteImageAssetsQuery>(
    SITE_IMAGE_ASSETS_QUERY,
    {
      errorPolicy: 'all',
      fetchPolicy: 'cache-first',
    }
  );

  const assets = useMemo(() => {
    return data?.siteImageAssetCollection?.items?.filter(Boolean) || [];
  }, [data]);

  const getAsset = useMemo(() => {
    return (key: string): SiteImageAsset | undefined => {
      return assets.find(asset => asset.key === key);
    };
  }, [assets]);

  const getAssetsByPrefix = useMemo(() => {
    return (prefix: string): SiteImageAsset[] => {
      return assets.filter(asset => asset.key?.startsWith(prefix));
    };
  }, [assets]);

  const getImageUrl = useMemo(() => {
    return (key: string, isDarkMode = false): string | undefined => {
      const asset = getAsset(key);
      if (!asset) return undefined;
      
      return isDarkMode 
        ? asset.imageDarkMode?.url || asset.imageLightMode?.url
        : asset.imageLightMode?.url;
    };
  }, [getAsset]);

  return {
    assets,
    loading,
    error,
    getAsset,
    getAssetsByPrefix,
    getImageUrl,
  };
};

/**
 * Hook to get a specific image asset by key
 */
export const useImageAsset = (key: string) => {
  const { getAsset, getImageUrl, loading, error } = useImageAssets();
  
  const asset = getAsset(key);
  const url = getImageUrl(key);
  
  return {
    asset,
    url,
    loading,
    error,
  };
};

/**
 * Hook for carousel images
 */
export const useCarouselImages = () => {
  const { getAssetsByPrefix, loading, error } = useImageAssets();
  
  const carouselAssets = getAssetsByPrefix('events_carousel');
  
  // Transform to match Carousel component expected format
  const transformedImages = carouselAssets.map(asset => ({
    image: asset.imageLightMode?.url || '',
    alt: asset.imageLightMode?.title || 'events_carousel',
  }));
  
  return {
    images: transformedImages,
    loading,
    error,
  };
};

/**
 * Hook for sponsor images  
 */
export const useSponsors = () => {
  const { getAssetsByPrefix } = useImageAssets();
  
  const sponsorAssets = getAssetsByPrefix('sponsor');
  
  // Transform to match Sponsors component expected format
  return sponsorAssets.map(asset => ({
    src: asset.imageLightMode?.url || '',
    darkSrc: asset.imageDarkMode?.url || asset.imageLightMode?.url || '',
    href: '#', // Default href - could be from asset metadata
    alt: asset.imageLightMode?.title || 'Sponsor logo',
  }));
};

/**
 * Hook for network member images  
 */
export const useNetworkMembers = () => {
  const { getAssetsByPrefix } = useImageAssets();
  
  const networkAssets = getAssetsByPrefix('network_members');
  
  // Transform to match Sponsors component expected format
  return networkAssets.map(asset => ({
    src: asset.imageLightMode?.url || '',
    darkSrc: asset.imageDarkMode?.url || asset.imageLightMode?.url || '',
    href: '#', // Default href - could be from asset metadata
    alt: asset.imageLightMode?.title || 'Network member logo',
  }));
};