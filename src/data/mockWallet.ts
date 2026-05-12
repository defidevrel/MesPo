/** View-only mock data — swap this module for a real provider later. */

export const mockUser = {
  greeting: "Good morning,",
  displayName: "defidevrel",
};

export const mockSpend = {
  label: "Available to spend",
  fiat: "0.82 USD",
  addressShort: "0x8C9E...6BaF",
};

export const mockBalances = [
  {
    id: "usdc",
    symbol: "USDC",
    amount: "0.82",
    fiatHint: "~$0.82",
    brand: "#2775CA",
  },
  {
    id: "usdt",
    symbol: "USDT",
    amount: "0",
    fiatHint: "~$0",
    brand: "#26A17B",
  },
] as const;

export const mockRecentTx = {
  title: "VERCEL DOMAINS COVINA C...",
  subtitle: "May 11, 2026 4:47 PM",
  status: "PENDING" as const,
  amount: "- 1.99 USD",
};
