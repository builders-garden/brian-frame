import { fetchQuery, init } from "@airstack/node";

if (!process.env.AIRSTACK_API_KEY) {
  throw new Error("AIRSTACK_API_KEY is missing");
}

init(process.env.AIRSTACK_API_KEY!);

interface GetConnectedAddressesForFidQuery {
    Socials: {
      Social: Array<{
        dappName: string;
        profileName: string;
        connectedAddresses: Array<{
          address: string;
          blockchain: string;
        }>;
        userAddress: string;
        userAssociatedAddresses: string[];
        fnames: string[];
      }>;
    };
  }

const query = /* GraphQL */ `
  query GetConnectedAddressesForFID($fid: String!) {
    Socials(
      input: {
        filter: { userId: { _eq: $fid }, dappName: { _eq: farcaster } }
        blockchain: ethereum
      }
    ) {
      Social {
        dappName
        profileName
        connectedAddresses {
          address
          blockchain
        }
        userAddress
        userAssociatedAddresses
        fnames
      }
    }
  }
`;

interface GetConnectedAddressesForFidQueryResponse {
  data: GetConnectedAddressesForFidQuery | null;
  error: Error | null;
}

export const getConnectedAddressesForFID = async (fid: string) => {
  const { data, error }: GetConnectedAddressesForFidQueryResponse =
    await fetchQuery(query, { fid });
  if (
    error ||
    !data ||
    !data.Socials ||
    !data.Socials.Social ||
    data.Socials.Social.length === 0
  ) {
    return null;
  }
  if (data.Socials.Social[0]?.connectedAddresses![0]?.address) {
    return data.Socials.Social[0]?.connectedAddresses![0]?.address;
  }
  if (data.Socials.Social[0]?.userAddress) {
    return data.Socials.Social[0]?.userAddress;
  }
  if (data.Socials.Social[0]?.userAssociatedAddresses?.length! > 0) {
    return data.Socials.Social[0]?.userAssociatedAddresses![0];
  }
  return null;
};