/**
 * UP ?�략 ?�장 (ID: 1601-1800)
 * 
 * STRATEGY_IDEAS.txt 기반 체계??구성:
 * - 1601-1650: RSI + BB + EMA 3�?복합 (계속) (50�?
 * - 1651-1800: MACD + BB + EMA 3�?복합 (150�?
 */

export class StrategiesUp1601 {
    
    // ==================== RSI + BB + EMA 3�?복합 계속 (1601-1650) ====================
    
    // --- RSI ?�양???�벨 + BB 밴드??+ EMA/SMA (1601-1620) ---
    
    /** RSI + BB Squeeze + EMA/SMA */
    static strategy1601(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth < 2 && ind.ema20 > ind.ema50; return { id: 1601, name: 'RSI28 + BB20 Squeeze + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1602(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth < 2 && ind.sma20 > ind.sma50; return { id: 1602, name: 'RSI28 + BB25 Squeeze + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1603(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth < 2 && ind.ema20 > ind.ema50; return { id: 1603, name: 'RSI32 + BB20 Squeeze + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy1604(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth < 2 && ind.sma20 > ind.sma50; return { id: 1604, name: 'RSI32 + BB25 Squeeze + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    /** RSI + BB Normal Width + EMA/SMA */
    static strategy1605(ind) { const match = (ind.rsi < 25 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4 && ind.ema20 > ind.ema50) && ind.priceChange > -1 && ind.volume > ind.avgVolume * 1.5; return { id: 1605, name: 'RSI25 + BB25 Normal + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1606(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4 && ind.ema20 > ind.ema50; return { id: 1606, name: 'RSI28 + BB25 Normal + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1607(ind) { const match = ind.rsi < 30 && ind.bollingerBands?.position < 30 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4 && ind.sma20 > ind.sma50; return { id: 1607, name: 'RSI30 + BB30 Normal + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1608(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 30 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4 && ind.ema20 > ind.ema50; return { id: 1608, name: 'RSI32 + BB30 Normal + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    
    /** RSI + BB Wide + EMA/SMA */
    static strategy1609(ind) { const match = ind.rsi < 25 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50; return { id: 1609, name: 'RSI25 + BB20 Wide + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1610(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50; return { id: 1610, name: 'RSI28 + BB25 Wide + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1611(ind) { const match = ind.rsi < 30 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4 && ind.sma20 > ind.sma50; return { id: 1611, name: 'RSI30 + BB25 Wide + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1612(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 30 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50; return { id: 1612, name: 'RSI32 + BB30 Wide + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    /** RSI + BB + Double MA Golden */
    static strategy1613(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1613, name: 'RSI28 + BB20 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1614(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1614, name: 'RSI28 + BB25 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1615(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1615, name: 'RSI32 + BB20 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1616(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1616, name: 'RSI32 + BB25 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** RSI + BB + Price/EMA Stack */
    static strategy1617(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1617, name: 'RSI28 + BB20 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1618(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1618, name: 'RSI28 + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1619(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1619, name: 'RSI32 + BB20 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1620(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1620, name: 'RSI32 + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    // --- RSI + BB + 가�??�치 복합 (1621-1640) ---
    
    /** RSI + BB + Price > EMA20 */
    static strategy1621(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20; return { id: 1621, name: 'RSI28 + BB25 + Price>EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1622(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20; return { id: 1622, name: 'RSI32 + BB25 + Price>EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy1623(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 30 && ind.close > ind.ema20; return { id: 1623, name: 'RSI28 + BB30 + Price>EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy1624(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 30 && ind.close > ind.ema20; return { id: 1624, name: 'RSI32 + BB30 + Price>EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    
    /** RSI + BB + Price > EMA50 */
    static strategy1625(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 25 && ind.close > ind.ema50; return { id: 1625, name: 'RSI28 + BB25 + Price>EMA50', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1626(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 25 && ind.close > ind.ema50; return { id: 1626, name: 'RSI32 + BB25 + Price>EMA50', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy1627(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 30 && ind.close > ind.ema50; return { id: 1627, name: 'RSI28 + BB30 + Price>EMA50', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1628(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 30 && ind.close > ind.ema50; return { id: 1628, name: 'RSI32 + BB30 + Price>EMA50', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    /** RSI + BB + Price > Both EMA */
    static strategy1629(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1629, name: 'RSI28 + BB25 + Price>Both EMA', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1630(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1630, name: 'RSI32 + BB25 + Price>Both EMA', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1631(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 30 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1631, name: 'RSI28 + BB30 + Price>Both EMA', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1632(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 30 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1632, name: 'RSI32 + BB30 + Price>Both EMA', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** RSI + BB Expanding + EMA */
    static strategy1633(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50; return { id: 1633, name: 'RSI28 + BB25 Expand + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1634(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50; return { id: 1634, name: 'RSI32 + BB25 Expand + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1635(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 30 && ind.bollingerBands?.bandwidth >= 3.5 && ind.ema20 > ind.ema50; return { id: 1635, name: 'RSI28 + BB30 Expand + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1636(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 30 && ind.bollingerBands?.bandwidth >= 3.5 && ind.ema20 > ind.ema50; return { id: 1636, name: 'RSI32 + BB30 Expand + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    /** RSI + BB + Full Stack */
    static strategy1637(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1637, name: 'RSI28 + BB20 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1638(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1638, name: 'RSI28 + BB25 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1639(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1639, name: 'RSI32 + BB20 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1640(ind) { const match = ind.rsi < 32 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1640, name: 'RSI32 + BB25 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    // --- RSI + BB + EMA 극단 복합 (1641-1650) ---
    
    /** 극단 복합 조건 */
    static strategy1641(ind) { const match = ind.rsi < 20 && ind.bollingerBands?.position < 10 && ind.bollingerBands?.bandwidth >= 4 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1641, name: 'RSI20 + BB10 Wide + Full EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy1642(ind) { const match = ind.rsi < 22 && ind.bollingerBands?.position < 12 && ind.bollingerBands?.bandwidth >= 3.5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1642, name: 'RSI22 + BB12 Wide + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1643(ind) { const match = ind.rsi < 25 && ind.bollingerBands?.position < 15 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.close > ind.ema50 && ind.ema20 > ind.ema50; return { id: 1643, name: 'RSI25 + BB15 Wide + All EMA Check', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1644(ind) { const match = ind.rsi < 25 && ind.bollingerBands?.position < 18 && ind.bollingerBands?.bandwidth >= 2.5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.sma20; return { id: 1644, name: 'RSI25 + BB18 + Double MA + Price>SMA', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1645(ind) { const match = ind.rsi < 28 && ind.bollingerBands?.position < 15 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1645, name: 'RSI28 + BB15 Wide + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1646(ind) { const match = ind.rsi < 30 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 2.5 && ind.close > ind.ema20 && ind.close > ind.ema50 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1646, name: 'RSI30 + BB20 + All Stack Perfect', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1647(ind) { const match = ind.rsi >= 45 && ind.rsi <= 55 && ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 55 && ind.bollingerBands?.bandwidth >= 2.5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1647, name: 'RSI BB Neutral + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy1648(ind) { const match = (ind.rsi >= 50 && ind.rsi <= 60 && ind.bollingerBands?.position >= 50 && ind.bollingerBands?.position <= 65 && ind.close > ind.ema20 && ind.ema20 > ind.ema50) && ind.priceChange < 3 && ind.volume > (ind.prevVolume || ind.volume) * 1.21; return { id: 1648, name: 'RSI 50+ + BB Mid-Up + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy1649(ind) { const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 70 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1649, name: 'RSI Strong + BB Upper Wide + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1650(ind) { const match = ind.rsi < 25 && ind.bollingerBands?.position < 15 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.close > ind.ema50 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.sma20; return { id: 1650, name: 'RSI25 + BB15 + All Indicators Perfect', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    
    // ==================== MACD + BB + EMA 3�?복합 (1651-1800) ====================
    
    // --- MACD Golden + BB ?�치 + EMA Golden (1651-1680) ---
    
    /** MACD Golden + BB 10% + EMA */
    static strategy1651(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 10 && ind.ema20 > ind.ema50; return { id: 1651, name: 'MACD Golden + BB10 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1652(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 10 && ind.sma20 > ind.sma50; return { id: 1652, name: 'MACD Golden + BB10 + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1653(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 10 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1653, name: 'MACD Golden + BB10 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** MACD Golden + BB 15% + EMA */
    static strategy1654(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 15 && ind.ema20 > ind.ema50; return { id: 1654, name: 'MACD Golden + BB15 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1655(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 15 && ind.sma20 > ind.sma50; return { id: 1655, name: 'MACD Golden + BB15 + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1656(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 15 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1656, name: 'MACD Golden + BB15 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    /** MACD Golden + BB 20% + EMA */
    static strategy1657(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1657, name: 'MACD Golden + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1658(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.sma20 > ind.sma50; return { id: 1658, name: 'MACD Golden + BB20 + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1659(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1659, name: 'MACD Golden + BB20 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** MACD Golden + BB 25% + EMA */
    static strategy1660(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1660, name: 'MACD Golden + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1661(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.sma20 > ind.sma50; return { id: 1661, name: 'MACD Golden + BB25 + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1662(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1662, name: 'MACD Golden + BB25 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** MACD Golden + BB 30% + EMA */
    static strategy1663(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50; return { id: 1663, name: 'MACD Golden + BB30 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1664(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.sma20 > ind.sma50; return { id: 1664, name: 'MACD Golden + BB30 + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1665(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1665, name: 'MACD Golden + BB30 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** MACD Golden + BB 중립 (40-60) + EMA */
    static strategy1666(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 55 && ind.ema20 > ind.ema50; return { id: 1666, name: 'MACD Golden + BB Neutral + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy1667(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 60 && ind.sma20 > ind.sma50; return { id: 1667, name: 'MACD Golden + BB Mid + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    static strategy1668(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 55 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1668, name: 'MACD Golden + BB Neutral + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    
    /** MACD Golden + BB ?�단 (50+) + EMA */
    static strategy1669(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 50 && ind.bollingerBands?.position <= 65 && ind.ema20 > ind.ema50; return { id: 1669, name: 'MACD Golden + BB Upper + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy1670(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 55 && ind.bollingerBands?.position <= 70 && ind.ema20 > ind.ema50; return { id: 1670, name: 'MACD Golden + BB55-70 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy1671(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 60 && ind.bollingerBands?.position <= 75 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1671, name: 'MACD Golden + BB60-75 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** MACD Golden + BB + Price > EMA */
    static strategy1672(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.close > ind.ema20; return { id: 1672, name: 'MACD Golden + BB20 + Price>EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1673(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.close > ind.ema20; return { id: 1673, name: 'MACD Golden + BB25 + Price>EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1674(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.close > ind.ema50; return { id: 1674, name: 'MACD Golden + BB20 + Price>EMA50', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1675(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.close > ind.ema50; return { id: 1675, name: 'MACD Golden + BB25 + Price>EMA50', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1676(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1676, name: 'MACD Golden + BB20 + Price>Both EMA', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1677(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1677, name: 'MACD Golden + BB25 + Price>Both EMA', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** MACD Golden + BB + EMA Stack */
    static strategy1678(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1678, name: 'MACD Golden + BB20 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1679(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1679, name: 'MACD Golden + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1680(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1680, name: 'MACD Golden + BB30 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    // --- MACD Histogram ?�벨 + BB + EMA (1681-1710) ---
    
    /** MACD Hist > 0 + BB ?�치 + EMA */
    static strategy1681(ind) { const match = ind.macd?.histogram > 0 && ind.bollingerBands?.position < 15 && ind.ema20 > ind.ema50; return { id: 1681, name: 'MACD Hist+ + BB15 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1682(ind) { const match = ind.macd?.histogram > 0 && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1682, name: 'MACD Hist+ + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1683(ind) { const match = ind.macd?.histogram > 0 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1683, name: 'MACD Hist+ + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1684(ind) { const match = ind.macd?.histogram > 0 && ind.bollingerBands?.position < 30 && ind.sma20 > ind.sma50; return { id: 1684, name: 'MACD Hist+ + BB30 + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    
    /** MACD Hist > 10 + BB ?�치 + EMA */
    static strategy1685(ind) { const match = ind.macd?.histogram > 10 && ind.bollingerBands?.position < 15 && ind.ema20 > ind.ema50; return { id: 1685, name: 'MACD Hist10 + BB15 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1686(ind) { const match = ind.macd?.histogram > 10 && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1686, name: 'MACD Hist10 + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1687(ind) { const match = ind.macd?.histogram > 10 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1687, name: 'MACD Hist10 + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1688(ind) { const match = ind.macd?.histogram > 10 && ind.bollingerBands?.position < 30 && ind.sma20 > ind.sma50; return { id: 1688, name: 'MACD Hist10 + BB30 + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    /** MACD Hist > 20 + BB ?�치 + EMA */
    static strategy1689(ind) { const match = ind.macd?.histogram > 20 && ind.bollingerBands?.position < 15 && ind.ema20 > ind.ema50; return { id: 1689, name: 'MACD Hist20 + BB15 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1690(ind) { const match = ind.macd?.histogram > 20 && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1690, name: 'MACD Hist20 + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1691(ind) { const match = ind.macd?.histogram > 20 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1691, name: 'MACD Hist20 + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1692(ind) { const match = ind.macd?.histogram > 20 && ind.bollingerBands?.position < 30 && ind.sma20 > ind.sma50; return { id: 1692, name: 'MACD Hist20 + BB30 + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** MACD Hist > 50 + BB ?�치 + EMA */
    static strategy1693(ind) { const match = ind.macd?.histogram > 50 && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1693, name: 'MACD Hist50 + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1694(ind) { const match = ind.macd?.histogram > 50 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1694, name: 'MACD Hist50 + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1695(ind) { const match = (ind.macd?.histogram > 50 && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50) && ind.priceChange > -2; return { id: 1695, name: 'MACD Hist50 + BB30 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    
    /** MACD Hist > 100 + BB ?�치 + EMA */
    static strategy1696(ind) { const match = ind.macd?.histogram > 100 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1696, name: 'MACD Hist100 + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1697(ind) { const match = ind.macd?.histogram > 100 && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50; return { id: 1697, name: 'MACD Hist100 + BB30 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1698(ind) { const match = ind.macd?.histogram > 100 && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1698, name: 'MACD Hist100 + BB30 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    
    /** MACD Hist + BB + Price > EMA */
    static strategy1699(ind) { const match = ind.macd?.histogram > 10 && ind.bollingerBands?.position < 20 && ind.close > ind.ema20; return { id: 1699, name: 'MACD Hist10 + BB20 + Price>EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1700(ind) { const match = ind.macd?.histogram > 15 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20; return { id: 1700, name: 'MACD Hist15 + BB25 + Price>EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1701(ind) { const match = ind.macd?.histogram > 20 && ind.bollingerBands?.position < 25 && ind.close > ind.ema50; return { id: 1701, name: 'MACD Hist20 + BB25 + Price>EMA50', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1702(ind) { const match = ind.macd?.histogram > 25 && ind.bollingerBands?.position < 30 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1702, name: 'MACD Hist25 + BB30 + Price>Both EMA', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** MACD Hist + BB + EMA Stack */
    static strategy1703(ind) { const match = ind.macd?.histogram > 10 && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1703, name: 'MACD Hist10 + BB20 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1704(ind) { const match = ind.macd?.histogram > 15 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1704, name: 'MACD Hist15 + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1705(ind) { const match = ind.macd?.histogram > 20 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1705, name: 'MACD Hist20 + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1706(ind) { const match = ind.macd?.histogram > 30 && ind.bollingerBands?.position < 30 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1706, name: 'MACD Hist30 + BB30 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** MACD Hist + BB + Double MA */
    static strategy1707(ind) { const match = ind.macd?.histogram > 15 && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1707, name: 'MACD Hist15 + BB20 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1708(ind) { const match = ind.macd?.histogram > 20 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1708, name: 'MACD Hist20 + BB25 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1709(ind) { const match = ind.macd?.histogram > 30 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1709, name: 'MACD Hist30 + BB25 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1710(ind) { const match = ind.macd?.histogram > 50 && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.obv > (ind.prevObv || 0); return { id: 1710, name: 'MACD Hist50 + BB30 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    // --- MACD 0??기�? + BB + EMA (1711-1740) ---
    
    /** MACD Above 0 + Golden + BB + EMA */
    static strategy1711(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 15 && ind.ema20 > ind.ema50; return { id: 1711, name: 'MACD Above0 Golden + BB15 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1712(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1712, name: 'MACD Above0 Golden + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1713(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1713, name: 'MACD Above0 Golden + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1714(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50; return { id: 1714, name: 'MACD Above0 Golden + BB30 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1715(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.sma20 > ind.sma50; return { id: 1715, name: 'MACD Above0 Golden + BB25 + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1716(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1716, name: 'MACD Above0 Golden + BB25 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** MACD Below 0 + Golden + BB + EMA */
    static strategy1717(ind) { const match = ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 15 && ind.ema20 > ind.ema50; return { id: 1717, name: 'MACD Below0 Golden + BB15 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1718(ind) { const match = ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1718, name: 'MACD Below0 Golden + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1719(ind) { const match = ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1719, name: 'MACD Below0 Golden + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1720(ind) { const match = ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50; return { id: 1720, name: 'MACD Below0 Golden + BB30 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1721(ind) { const match = ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.sma20 > ind.sma50; return { id: 1721, name: 'MACD Below0 Golden + BB25 + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1722(ind) { const match = ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1722, name: 'MACD Below0 Golden + BB25 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** MACD Cross 0 + BB + EMA */
    static strategy1723(ind) { const crossZero = ind.macd?.histogram >= 0 && (ind.macd?.prevHistogram || 0) < 0; const match = crossZero && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1723, name: 'MACD Cross0 + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1724(ind) { const crossZero = ind.macd?.histogram >= 0 && (ind.macd?.prevHistogram || 0) < 0; const match = crossZero && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1724, name: 'MACD Cross0 + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1725(ind) { const crossZero = ind.macd?.histogram >= 0 && (ind.macd?.prevHistogram || 0) < 0; const match = crossZero && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50; return { id: 1725, name: 'MACD Cross0 + BB30 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1726(ind) { const crossZero = ind.macd?.histogram >= 0 && (ind.macd?.prevHistogram || 0) < 0; const match = crossZero && ind.bollingerBands?.position < 25 && ind.sma20 > ind.sma50; return { id: 1726, name: 'MACD Cross0 + BB25 + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1727(ind) { const crossZero = ind.macd?.histogram >= 0 && (ind.macd?.prevHistogram || 0) < 0; const match = crossZero && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1727, name: 'MACD Cross0 + BB25 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1728(ind) { const crossZero = ind.macd?.histogram >= 0 && (ind.macd?.prevHistogram || 0) < 0; const match = crossZero && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1728, name: 'MACD Cross0 + BB20 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** MACD Turn Up + BB + EMA */
    static strategy1729(ind) { const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = histTurn && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1729, name: 'MACD Turn Up + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1730(ind) { const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = histTurn && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1730, name: 'MACD Turn Up + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1731(ind) { const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = histTurn && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50; return { id: 1731, name: 'MACD Turn Up + BB30 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1732(ind) { const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = histTurn && ind.bollingerBands?.position < 25 && ind.sma20 > ind.sma50; return { id: 1732, name: 'MACD Turn Up + BB25 + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1733(ind) { const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = histTurn && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1733, name: 'MACD Turn Up + BB25 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1734(ind) { const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = histTurn && ind.bollingerBands?.position < 20 && ind.close > ind.ema20; return { id: 1734, name: 'MACD Turn Up + BB20 + Price>EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1735(ind) { const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = histTurn && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1735, name: 'MACD Turn Up + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    
    /** MACD 0??+ BB + Price Stack */
    static strategy1736(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1736, name: 'MACD Above0 Golden + BB20 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1737(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1737, name: 'MACD Above0 Golden + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1738(ind) { const match = ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1738, name: 'MACD Below0 Golden + BB20 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1739(ind) { const match = ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1739, name: 'MACD Below0 Golden + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1740(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1740, name: 'MACD Above0 Hist20 + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    // --- MACD + BB 밴드??+ EMA (1741-1770) ---
    
    /** MACD Golden + BB Squeeze + EMA */
    static strategy1741(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth < 2 && ind.ema20 > ind.ema50; return { id: 1741, name: 'MACD Golden + BB20 Squeeze + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1742(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth < 2 && ind.ema20 > ind.ema50; return { id: 1742, name: 'MACD Golden + BB25 Squeeze + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1743(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.bollingerBands?.bandwidth < 2 && ind.ema20 > ind.ema50; return { id: 1743, name: 'MACD Golden + BB30 Squeeze + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1744(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth < 2 && ind.sma20 > ind.sma50; return { id: 1744, name: 'MACD Golden + BB25 Squeeze + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1745(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth < 2 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1745, name: 'MACD Golden + BB25 Squeeze + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** MACD Golden + BB Normal + EMA */
    static strategy1746(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4 && ind.ema20 > ind.ema50; return { id: 1746, name: 'MACD Golden + BB25 Normal + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1747(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4 && ind.ema20 > ind.ema50; return { id: 1747, name: 'MACD Golden + BB30 Normal + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1748(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4 && ind.sma20 > ind.sma50; return { id: 1748, name: 'MACD Golden + BB25 Normal + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1749(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1749, name: 'MACD Golden + BB25 Normal + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1750(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1750, name: 'MACD Golden + BB25 Normal + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** MACD Golden + BB Wide + EMA */
    static strategy1751(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50; return { id: 1751, name: 'MACD Golden + BB20 Wide + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1752(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50; return { id: 1752, name: 'MACD Golden + BB25 Wide + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1753(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50; return { id: 1753, name: 'MACD Golden + BB30 Wide + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1754(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4 && ind.sma20 > ind.sma50; return { id: 1754, name: 'MACD Golden + BB25 Wide + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1755(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1755, name: 'MACD Golden + BB25 Wide + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    
    /** MACD Golden + BB Expanding + EMA */
    static strategy1756(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3 && ind.bollingerBands?.bandwidth < 5 && ind.ema20 > ind.ema50; return { id: 1756, name: 'MACD Golden + BB25 Expand + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1757(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.bollingerBands?.bandwidth >= 3 && ind.bollingerBands?.bandwidth < 5 && ind.ema20 > ind.ema50; return { id: 1757, name: 'MACD Golden + BB30 Expand + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1758(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1758, name: 'MACD Golden + BB25 Expand + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1759(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1759, name: 'MACD Golden + BB20 Wide Expand + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1760(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1760, name: 'MACD Golden + BB25 Expand + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** MACD Hist + BB 밴드??+ EMA */
    static strategy1761(ind) { const match = ind.macd?.histogram > 10 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth < 2 && ind.ema20 > ind.ema50; return { id: 1761, name: 'MACD Hist10 + BB25 Squeeze + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1762(ind) { const match = ind.macd?.histogram > 15 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4 && ind.ema20 > ind.ema50; return { id: 1762, name: 'MACD Hist15 + BB25 Normal + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1763(ind) { const match = ind.macd?.histogram > 20 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50; return { id: 1763, name: 'MACD Hist20 + BB25 Wide + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1764(ind) { const match = ind.macd?.histogram > 30 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50; return { id: 1764, name: 'MACD Hist30 + BB20 Expand + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1765(ind) { const match = ind.macd?.histogram > 20 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1765, name: 'MACD Hist20 + BB25 Expand + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    
    /** MACD 0??+ BB 밴드??+ EMA */
    static strategy1766(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth < 2 && ind.ema20 > ind.ema50; return { id: 1766, name: 'MACD Above0 Golden + BB25 Squeeze + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1767(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4 && ind.ema20 > ind.ema50; return { id: 1767, name: 'MACD Above0 Golden + BB25 Normal + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1768(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50; return { id: 1768, name: 'MACD Above0 Golden + BB25 Wide + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1769(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50; return { id: 1769, name: 'MACD Above0 Hist15 + BB25 Expand + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1770(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3.5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1770, name: 'MACD Above0 Hist20 + BB20 Wide + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    // --- MACD + BB + EMA 극단 복합 (1771-1800) ---
    
    /** 강한 ?�호 복합 */
    static strategy1771(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 15 && ind.ema20 > ind.ema50 && ind.close > ind.ema20; return { id: 1771, name: 'MACD Strong + BB15 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1772(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 && ind.close > ind.ema20; return { id: 1772, name: 'MACD Strong + BB20 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1773(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 25 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1773, name: 'MACD Strong + BB25 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1774(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 30 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50; return { id: 1774, name: 'MACD Strong + BB20 Wide + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1775(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 50 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1775, name: 'MACD Hist50 Strong + BB25 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    
    /** ?�벽???�호 복합 */
    static strategy1776(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 10 && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 && ind.close > ind.ema20; return { id: 1776, name: 'MACD Perfect + BB20 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1777(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.close > ind.ema20; return { id: 1777, name: 'MACD Perfect + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1778(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1778, name: 'MACD Perfect + BB25 + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1779(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50; return { id: 1779, name: 'MACD Perfect + BB20 Wide + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy1780(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1780, name: 'MACD Perfect + BB20 Wide + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    /** ?� ?�택 ?�벽 복합 */
    static strategy1781(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 15 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1781, name: 'MACD Golden + BB15 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1782(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1782, name: 'MACD Golden + BB20 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1783(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 10 && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1783, name: 'MACD Golden Hist10 + BB20 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1784(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1784, name: 'MACD Golden Hist15 + BB25 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1785(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1785, name: 'MACD Golden Hist20 + BB20 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    
    /** 0??+ ?� ?�택 */
    static strategy1786(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 15 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1786, name: 'MACD Above0 Golden + BB15 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy1787(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1787, name: 'MACD Above0 Golden + BB20 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1788(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 10 && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1788, name: 'MACD Above0 Hist10 + BB20 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy1789(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1789, name: 'MACD Above0 Hist15 + BB25 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy1790(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1790, name: 'MACD Above0 Hist20 + BB20 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    
    /** 밴드??+ ?� ?�택 */
    static strategy1791(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1791, name: 'MACD Golden + BB20 Wide + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1792(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1792, name: 'MACD Golden + BB25 Wide + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1793(ind) { const match = ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1793, name: 'MACD Golden Hist15 + BB20 Wide + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy1794(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1794, name: 'MACD Above0 Golden + BB20 Wide + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy1795(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1795, name: 'MACD Perfect + BB20 Wide + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    
    /** 최상??복합 ?�호 */
    static strategy1796(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 15 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1796, name: 'MACD Strong Perfect + BB15 Wide + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy1797(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 25 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1797, name: 'MACD Strong Perfect + BB20 Wide + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy1798(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 30 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1798, name: 'MACD Ultimate + BB20 Wide + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy1799(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 30 && ind.bollingerBands?.position < 15 && ind.bollingerBands?.bandwidth >= 3.5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1799, name: 'MACD Ultimate + BB15 Wide + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy1800(ind) { const match = ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 50 && ind.bollingerBands?.position < 15 && ind.bollingerBands?.bandwidth >= 4 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.sma20; return { id: 1800, name: 'MACD + BB + EMA All Perfect', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }

    /** 모든 ?�략 ?�행 (1601-1800) */
    static analyzeAll(indicators) {
        return [
            this.strategy1601(indicators), this.strategy1602(indicators), this.strategy1603(indicators),
            this.strategy1604(indicators), this.strategy1605(indicators), this.strategy1606(indicators),
            this.strategy1607(indicators), this.strategy1608(indicators), this.strategy1609(indicators),
            this.strategy1610(indicators), this.strategy1611(indicators), this.strategy1612(indicators),
            this.strategy1613(indicators), this.strategy1614(indicators), this.strategy1615(indicators),
            this.strategy1616(indicators), this.strategy1617(indicators), this.strategy1618(indicators),
            this.strategy1619(indicators), this.strategy1620(indicators), this.strategy1621(indicators),
            this.strategy1622(indicators), this.strategy1623(indicators), this.strategy1624(indicators),
            this.strategy1625(indicators), this.strategy1626(indicators), this.strategy1627(indicators),
            this.strategy1628(indicators), this.strategy1629(indicators), this.strategy1630(indicators),
            this.strategy1631(indicators), this.strategy1632(indicators), this.strategy1633(indicators),
            this.strategy1634(indicators), this.strategy1635(indicators), this.strategy1636(indicators),
            this.strategy1637(indicators), this.strategy1638(indicators), this.strategy1639(indicators),
            this.strategy1640(indicators), this.strategy1641(indicators), this.strategy1642(indicators),
            this.strategy1643(indicators), this.strategy1644(indicators), this.strategy1645(indicators),
            this.strategy1646(indicators), this.strategy1647(indicators), this.strategy1648(indicators),
            this.strategy1649(indicators), this.strategy1650(indicators), this.strategy1651(indicators),
            this.strategy1652(indicators), this.strategy1653(indicators), this.strategy1654(indicators),
            this.strategy1655(indicators), this.strategy1656(indicators), this.strategy1657(indicators),
            this.strategy1658(indicators), this.strategy1659(indicators), this.strategy1660(indicators),
            this.strategy1661(indicators), this.strategy1662(indicators), this.strategy1663(indicators),
            this.strategy1664(indicators), this.strategy1665(indicators), this.strategy1666(indicators),
            this.strategy1667(indicators), this.strategy1668(indicators), this.strategy1669(indicators),
            this.strategy1670(indicators), this.strategy1671(indicators), this.strategy1672(indicators),
            this.strategy1673(indicators), this.strategy1674(indicators), this.strategy1675(indicators),
            this.strategy1676(indicators), this.strategy1677(indicators), this.strategy1678(indicators),
            this.strategy1679(indicators), this.strategy1680(indicators), this.strategy1681(indicators),
            this.strategy1682(indicators), this.strategy1683(indicators), this.strategy1684(indicators),
            this.strategy1685(indicators), this.strategy1686(indicators), this.strategy1687(indicators),
            this.strategy1688(indicators), this.strategy1689(indicators), this.strategy1690(indicators),
            this.strategy1691(indicators), this.strategy1692(indicators), this.strategy1693(indicators),
            this.strategy1694(indicators), this.strategy1695(indicators), this.strategy1696(indicators),
            this.strategy1697(indicators), this.strategy1698(indicators), this.strategy1699(indicators),
            this.strategy1700(indicators), this.strategy1701(indicators), this.strategy1702(indicators),
            this.strategy1703(indicators), this.strategy1704(indicators), this.strategy1705(indicators),
            this.strategy1706(indicators), this.strategy1707(indicators), this.strategy1708(indicators),
            this.strategy1709(indicators), this.strategy1710(indicators), this.strategy1711(indicators),
            this.strategy1712(indicators), this.strategy1713(indicators), this.strategy1714(indicators),
            this.strategy1715(indicators), this.strategy1716(indicators), this.strategy1717(indicators),
            this.strategy1718(indicators), this.strategy1719(indicators), this.strategy1720(indicators),
            this.strategy1721(indicators), this.strategy1722(indicators), this.strategy1723(indicators),
            this.strategy1724(indicators), this.strategy1725(indicators), this.strategy1726(indicators),
            this.strategy1727(indicators), this.strategy1728(indicators), this.strategy1729(indicators),
            this.strategy1730(indicators), this.strategy1731(indicators), this.strategy1732(indicators),
            this.strategy1733(indicators), this.strategy1734(indicators), this.strategy1735(indicators),
            this.strategy1736(indicators), this.strategy1737(indicators), this.strategy1738(indicators),
            this.strategy1739(indicators), this.strategy1740(indicators), this.strategy1741(indicators),
            this.strategy1742(indicators), this.strategy1743(indicators), this.strategy1744(indicators),
            this.strategy1745(indicators), this.strategy1746(indicators), this.strategy1747(indicators),
            this.strategy1748(indicators), this.strategy1749(indicators), this.strategy1750(indicators),
            this.strategy1751(indicators), this.strategy1752(indicators), this.strategy1753(indicators),
            this.strategy1754(indicators), this.strategy1755(indicators), this.strategy1756(indicators),
            this.strategy1757(indicators), this.strategy1758(indicators), this.strategy1759(indicators),
            this.strategy1760(indicators), this.strategy1761(indicators), this.strategy1762(indicators),
            this.strategy1763(indicators), this.strategy1764(indicators), this.strategy1765(indicators),
            this.strategy1766(indicators), this.strategy1767(indicators), this.strategy1768(indicators),
            this.strategy1769(indicators), this.strategy1770(indicators), this.strategy1771(indicators),
            this.strategy1772(indicators), this.strategy1773(indicators), this.strategy1774(indicators),
            this.strategy1775(indicators), this.strategy1776(indicators), this.strategy1777(indicators),
            this.strategy1778(indicators), this.strategy1779(indicators), this.strategy1780(indicators),
            this.strategy1781(indicators), this.strategy1782(indicators), this.strategy1783(indicators),
            this.strategy1784(indicators), this.strategy1785(indicators), this.strategy1786(indicators),
            this.strategy1787(indicators), this.strategy1788(indicators), this.strategy1789(indicators),
            this.strategy1790(indicators), this.strategy1791(indicators), this.strategy1792(indicators),
            this.strategy1793(indicators), this.strategy1794(indicators), this.strategy1795(indicators),
            this.strategy1796(indicators), this.strategy1797(indicators), this.strategy1798(indicators),
            this.strategy1799(indicators), this.strategy1800(indicators)
        ];
    }
}

