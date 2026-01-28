/**
 * UP ?�략 ?�장 (ID: 1801-2000)
 * 
 * STRATEGY_IDEAS.txt 기반 체계??구성:
 * - 1801-1900: 4�??�상 지??복합 (100�?
 * - 1901-2000: Fear & Greed 극단??공포 (0-20) 조합 (100�?
 */

export class StrategiesUp1801 {
    
    // ==================== 4�??�상 지??복합 (1801-1900) ====================
    
    // --- RSI + MACD + BB + EMA 4�?복합 (1801-1830) ---
    
    /** RSI 과매??+ MACD Golden + BB ?�단 + EMA Golden */
    static strategy1801(ind) { const match = ind.rsi < 20 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 15 && ind.ema20 > ind.ema50; return { id: 1801, name: 'RSI20 + MACD Golden + BB15 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1802(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 15 && ind.ema20 > ind.ema50; return { id: 1802, name: 'RSI25 + MACD Golden + BB15 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1803(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1803, name: 'RSI25 + MACD Golden + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1804(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1804, name: 'RSI28 + MACD Golden + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1805(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1805, name: 'RSI30 + MACD Golden + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1806(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.sma20 > ind.sma50; return { id: 1806, name: 'RSI30 + MACD Golden + BB25 + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** RSI + MACD + BB + Double MA Golden */
    static strategy1807(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1807, name: 'RSI25 + MACD Golden + BB20 + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1808(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1808, name: 'RSI28 + MACD Golden + BB25 + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1809(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1809, name: 'RSI30 + MACD Golden + BB25 + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1810(ind) { const match = ind.rsi < 32 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1810, name: 'RSI32 + MACD Golden + BB30 + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    /** RSI + MACD Hist + BB + EMA */
    static strategy1811(ind) { const match = ind.rsi < 25 && ind.macd?.histogram > 10 && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1811, name: 'RSI25 + MACD Hist10 + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1812(ind) { const match = ind.rsi < 28 && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1812, name: 'RSI28 + MACD Hist15 + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1813(ind) { const match = ind.rsi < 30 && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1813, name: 'RSI30 + MACD Hist20 + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1814(ind) { const match = ind.rsi < 30 && ind.macd?.histogram > 25 && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1814, name: 'RSI30 + MACD Hist25 + BB30 + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    /** RSI + MACD 0??+ BB + EMA */
    static strategy1815(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1815, name: 'RSI25 + MACD Above0 Golden + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1816(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1816, name: 'RSI28 + MACD Above0 Golden + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1817(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1817, name: 'RSI30 + MACD Above0 Golden + BB25 + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy1818(ind) { const match = ind.rsi < 30 && ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1818, name: 'RSI30 + MACD Below0 Golden + BB25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** RSI + MACD + BB + EMA Stack (Price > EMA) */
    static strategy1819(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1819, name: 'RSI25 + MACD Golden + BB20 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1820(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1820, name: 'RSI28 + MACD Golden + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1821(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1821, name: 'RSI30 + MACD Golden + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1822(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1822, name: 'RSI30 + MACD Golden + BB30 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** RSI + MACD + BB 밴드??+ EMA */
    static strategy1823(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth < 2 && ind.ema20 > ind.ema50; return { id: 1823, name: 'RSI25 + MACD Golden + BB20 Squeeze + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1824(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4 && ind.ema20 > ind.ema50; return { id: 1824, name: 'RSI28 + MACD Golden + BB25 Normal + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1825(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50; return { id: 1825, name: 'RSI30 + MACD Golden + BB25 Wide + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1826(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1826, name: 'RSI28 + MACD Golden + BB20 Expand + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    
    /** RSI + MACD + BB + Full MA Stack */
    static strategy1827(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1827, name: 'RSI25 + MACD Golden + BB20 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy1828(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1828, name: 'RSI28 + MACD Golden + BB25 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy1829(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1829, name: 'RSI30 + MACD Golden + BB25 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1830(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1830, name: 'RSI30 + MACD Golden + BB30 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    // --- RSI + MACD + BB + EMA + Price 5�?복합 (1831-1860) ---
    
    /** RSI + MACD Golden + BB + EMA + Price Position */
    static strategy1831(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1831, name: 'RSI25 + MACD Golden + BB20 + EMA Golden + Price>Both', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy1832(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1832, name: 'RSI28 + MACD Golden + BB25 + EMA Golden + Price>Both', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1833(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1833, name: 'RSI30 + MACD Golden + BB25 + EMA Golden + Price>Both', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1834(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1834, name: 'RSI30 + MACD Golden + BB30 + EMA Golden + Price>Both', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    
    /** RSI + MACD Hist + BB + EMA + Price */
    static strategy1835(ind) { const match = ind.rsi < 25 && ind.macd?.histogram > 10 && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 && ind.close > ind.ema20; return { id: 1835, name: 'RSI25 + MACD Hist10 + BB20 + EMA Golden + Price>EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1836(ind) { const match = ind.rsi < 28 && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.close > ind.ema20; return { id: 1836, name: 'RSI28 + MACD Hist15 + BB25 + EMA Golden + Price>EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1837(ind) { const match = ind.rsi < 30 && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1837, name: 'RSI30 + MACD Hist20 + BB25 + EMA Golden + Price>Both', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1838(ind) { const match = ind.rsi < 30 && ind.macd?.histogram > 25 && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1838, name: 'RSI30 + MACD Hist25 + BB30 + EMA Golden + Price>Both', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    /** RSI + MACD 0??+ BB + EMA + Price */
    static strategy1839(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 && ind.close > ind.ema20; return { id: 1839, name: 'RSI25 + MACD Above0 Golden + BB20 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy1840(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.close > ind.ema20; return { id: 1840, name: 'RSI28 + MACD Above0 Golden + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy1841(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1841, name: 'RSI30 + MACD Above0 Golden + BB25 + EMA Stack + Price>Both', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy1842(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.close > ind.ema20; return { id: 1842, name: 'RSI30 + MACD Above0 Hist15 + BB25 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    /** RSI + MACD + BB + Double MA + Price */
    static strategy1843(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20; return { id: 1843, name: 'RSI25 + MACD Golden + BB20 + Double MA + Price>EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy1844(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20; return { id: 1844, name: 'RSI28 + MACD Golden + BB25 + Double MA + Price>EMA20', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy1845(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.sma20; return { id: 1845, name: 'RSI30 + MACD Golden + BB25 + Double MA + Price>SMA20', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1846(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 30 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20; return { id: 1846, name: 'RSI30 + MACD Golden + BB30 + Double MA + Price>Both MA', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    
    /** RSI + MACD + BB 밴드??+ EMA + Price */
    static strategy1847(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50 && ind.close > ind.ema20; return { id: 1847, name: 'RSI25 + MACD Golden + BB20 Expand + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy1848(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3.5 && ind.ema20 > ind.ema50 && ind.close > ind.ema20; return { id: 1848, name: 'RSI28 + MACD Golden + BB25 Expand + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1849(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50 && ind.close > ind.ema20 && ind.close > ind.ema50; return { id: 1849, name: 'RSI30 + MACD Golden + BB25 Wide + EMA Stack + Price>Both', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy1850(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20; return { id: 1850, name: 'RSI30 + MACD Golden + BB20 Wide + Double MA + Price>EMA', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    
    /** ?�벽??5�?복합 */
    static strategy1851(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20; return { id: 1851, name: 'RSI25 + MACD Perfect + BB20 + Double MA + Price>EMA', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy1852(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20; return { id: 1852, name: 'RSI28 + MACD Perfect + BB25 + Double MA + Price>EMA', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy1853(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20; return { id: 1853, name: 'RSI30 + MACD Perfect + BB25 + Double MA + Price>Both MA', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy1854(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20; return { id: 1854, name: 'RSI30 + MACD Perfect Hist15 + BB25 + Double MA + Price>EMA', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    
    /** RSI + MACD + BB 밴드??+ Double MA + Price */
    static strategy1855(ind) { const match = (ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20) && ind.priceChange < 5; return { id: 1855, name: 'RSI25 + MACD Golden + BB20 Expand + Double MA + Price>EMA', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy1856(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3.5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20; return { id: 1856, name: 'RSI28 + MACD Golden + BB25 Expand + Double MA + Price>EMA', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy1857(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20; return { id: 1857, name: 'RSI30 + MACD Golden + BB25 Wide + Double MA + Price>Both MA', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy1858(ind) { const match = (ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20) && ind.consecutiveGreen >= 1; return { id: 1858, name: 'RSI25 + MACD Perfect + BB20 Expand + Double MA + Price>EMA', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy1859(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3.5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20; return { id: 1859, name: 'RSI28 + MACD Perfect + BB25 Expand + Double MA + Price>Both', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy1860(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20; return { id: 1860, name: 'RSI30 + MACD Ultimate + BB20 Wide + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    
    // --- 중립/강세 RSI 기반 4�?복합 (1861-1880) ---
    
    /** RSI 중립 + MACD + BB + EMA */
    static strategy1861(ind) { const match = ind.rsi >= 45 && ind.rsi <= 55 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 60 && ind.ema20 > ind.ema50; return { id: 1861, name: 'RSI Neutral + MACD Golden + BB Mid + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy1862(ind) { const match = ind.rsi >= 45 && ind.rsi <= 55 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 10 && ind.bollingerBands?.position >= 40 && ind.bollingerBands?.position <= 60 && ind.ema20 > ind.ema50; return { id: 1862, name: 'RSI Neutral + MACD Golden Hist10 + BB Mid + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1863(ind) { const match = ind.rsi >= 45 && ind.rsi <= 55 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 55 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1863, name: 'RSI Neutral + MACD Above0 Golden + BB Neutral + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1864(ind) { const match = ind.rsi >= 45 && ind.rsi <= 55 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 45 && ind.bollingerBands?.position <= 60 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1864, name: 'RSI Neutral + MACD Golden + BB Mid + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    /** RSI 50 ?�파 + MACD + BB + EMA */
    static strategy1865(ind) { const match = ind.rsi >= 50 && ind.rsi <= 60 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 50 && ind.ema20 > ind.ema50; return { id: 1865, name: 'RSI 50+ + MACD Golden + BB Upper + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1866(ind) { const match = ind.rsi >= 50 && ind.rsi <= 60 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 15 && ind.bollingerBands?.position > 50 && ind.ema20 > ind.ema50; return { id: 1866, name: 'RSI 50+ + MACD Golden Hist15 + BB Upper + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1867(ind) { const match = ind.rsi >= 50 && ind.rsi <= 60 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 50 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1867, name: 'RSI 50+ + MACD Above0 Golden + BB Upper + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1868(ind) { const match = ind.rsi >= 50 && ind.rsi <= 60 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 50 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1868, name: 'RSI 50+ + MACD Golden + BB Upper + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** RSI 강세 + MACD + BB + EMA */
    static strategy1869(ind) { const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 55 && ind.ema20 > ind.ema50; return { id: 1869, name: 'RSI Strong + MACD Golden + BB55+ + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1870(ind) { const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 15 && ind.bollingerBands?.position > 55 && ind.ema20 > ind.ema50; return { id: 1870, name: 'RSI Strong + MACD Golden Hist15 + BB55+ + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1871(ind) { const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 55 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1871, name: 'RSI Strong + MACD Above0 Golden + BB55+ + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1872(ind) { const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 55 && ind.bollingerBands?.position <= 70 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1872, name: 'RSI Strong + MACD Golden + BB 55-70 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    
    /** RSI ?�승??+ MACD + BB + EMA */
    static strategy1873(ind) { const match = ind.rsi >= 60 && ind.rsi <= 70 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 60 && ind.ema20 > ind.ema50; return { id: 1873, name: 'RSI Upper + MACD Golden + BB60+ + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1874(ind) { const match = ind.rsi >= 60 && ind.rsi <= 70 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 20 && ind.bollingerBands?.position > 60 && ind.ema20 > ind.ema50; return { id: 1874, name: 'RSI Upper + MACD Golden Hist20 + BB60+ + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1875(ind) { const match = ind.rsi >= 60 && ind.rsi <= 70 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 60 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1875, name: 'RSI Upper + MACD Above0 Golden + BB60+ + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1876(ind) { const match = ind.rsi >= 60 && ind.rsi <= 70 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position >= 60 && ind.bollingerBands?.position <= 75 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1876, name: 'RSI Upper + MACD Golden + BB 60-75 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** 중립~강세 ?�벽 복합 */
    static strategy1877(ind) { const match = ind.rsi >= 50 && ind.rsi <= 60 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 50 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1877, name: 'RSI 50+ + MACD Perfect + BB Expand + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1878(ind) { const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position > 55 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1878, name: 'RSI Strong + MACD Perfect + BB Expand + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1879(ind) { const match = ind.rsi >= 55 && ind.rsi <= 65 && ind.macd?.MACD > 0 && ind.macd?.histogram > 15 && ind.bollingerBands?.position > 55 && ind.bollingerBands?.position <= 70 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1879, name: 'RSI Strong + MACD Perfect Hist15 + BB 55-70 + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1880(ind) { const match = ind.rsi >= 60 && ind.rsi <= 70 && ind.macd?.MACD > 0 && ind.macd?.histogram > 20 && ind.bollingerBands?.position >= 60 && ind.bollingerBands?.position <= 75 && ind.bollingerBands?.bandwidth >= 3 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1880, name: 'RSI Upper + MACD Ultimate + BB Wide + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    // --- 최상??복합 ?�호 (1881-1900) ---
    
    /** 6�?복합: RSI + MACD + BB Position + BB Width + EMA + SMA */
    static strategy1881(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1881, name: 'RSI25 + MACD Golden + BB20 Expand + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy1882(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1882, name: 'RSI25 + MACD Above0 Golden + BB20 Expand + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy1883(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3.5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1883, name: 'RSI28 + MACD Above0 Golden + BB25 Expand + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 93 : 0 }; }
    static strategy1884(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1884, name: 'RSI30 + MACD Above0 Golden + BB25 Wide + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 94 : 0 }; }
    static strategy1885(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3.5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1885, name: 'RSI30 + MACD Above0 Hist15 + BB25 Expand + Double MA', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    
    /** 7�?복합: 모든 조건 + Price Position */
    static strategy1886(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.obv > (ind.prevObv || 0); return { id: 1886, name: 'RSI25 + MACD Golden + BB20 Expand + Double MA + Price>EMA', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy1887(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.volume > (ind.avgVolume || ind.volume) * 1.2000000000000002; return { id: 1887, name: 'RSI25 + MACD Above0 Golden + BB20 Expand + Double MA + Price>EMA', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy1888(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3.5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20; return { id: 1888, name: 'RSI28 + MACD Above0 Golden + BB25 Expand + Double MA + Price>EMA', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }
    static strategy1889(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20; return { id: 1889, name: 'RSI30 + MACD Above0 Golden + BB25 Wide + Double MA + Price>EMA', direction: 'UP', match: Boolean(match), confidence: match ? 96 : 0 }; }
    static strategy1890(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3.5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20; return { id: 1890, name: 'RSI30 + MACD Above0 Hist15 + BB25 Expand + Full Stack', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    
    /** Ultimate: 모든 조건 ?�벽 */
    static strategy1891(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 10 && ind.bollingerBands?.position < 15 && ind.bollingerBands?.bandwidth >= 3 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20; return { id: 1891, name: '4+ Indicator All Perfect (RSI25)', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy1892(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3.5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20; return { id: 1892, name: '4+ Indicator All Perfect (RSI28)', direction: 'UP', match: Boolean(match), confidence: match ? 97 : 0 }; }
    static strategy1893(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20; return { id: 1893, name: '4+ Indicator All Perfect (RSI30)', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    static strategy1894(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 15 && ind.bollingerBands?.position < 15 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20 && ind.close > ind.ema50; return { id: 1894, name: '4+ Indicator Ultimate (RSI25)', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    static strategy1895(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20 && ind.close > ind.ema50; return { id: 1895, name: '4+ Indicator Ultimate (RSI28)', direction: 'UP', match: Boolean(match), confidence: match ? 98 : 0 }; }
    
    /** 최상???�호 */
    static strategy1896(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 20 && ind.bollingerBands?.position < 15 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20 && ind.close > ind.ema50 && ind.close > ind.sma50; return { id: 1896, name: 'Supreme Buy Signal (RSI25)', direction: 'UP', match: Boolean(match), confidence: match ? 99 : 0 }; }
    static strategy1897(ind) { const match = ind.rsi < 28 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 25 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 4 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20 && ind.close > ind.ema50 && ind.close > ind.sma50; return { id: 1897, name: 'Supreme Buy Signal (RSI28)', direction: 'UP', match: Boolean(match), confidence: match ? 99 : 0 }; }
    static strategy1898(ind) { const match = ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 30 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 4.5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20 && ind.close > ind.ema50 && ind.close > ind.sma50; return { id: 1898, name: 'Supreme Buy Signal (RSI30)', direction: 'UP', match: Boolean(match), confidence: match ? 99 : 0 }; }
    static strategy1899(ind) { const match = ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 30 && ind.bollingerBands?.position < 15 && ind.bollingerBands?.bandwidth >= 5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20 && ind.close > ind.ema50 && ind.close > ind.sma50; return { id: 1899, name: 'Ultimate Buy Signal', direction: 'UP', match: Boolean(match), confidence: match ? 99 : 0 }; }
    static strategy1900(ind) { const match = ind.rsi < 20 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.macd?.histogram > 50 && ind.bollingerBands?.position < 10 && ind.bollingerBands?.bandwidth >= 5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20 && ind.close > ind.sma20 && ind.close > ind.ema50 && ind.close > ind.sma50; return { id: 1900, name: 'Perfect Storm Buy Signal', direction: 'UP', match: Boolean(match), confidence: match ? 100 : 0 }; }
    
    // ==================== Fear & Greed 극단??공포 (0-20) 조합 (1901-2000) ====================
    
    // --- 극단??공포 + RSI 조합 (1901-1920) ---
    
    /** F&G 극단??공포 (0-10) + RSI */
    static strategy1901(ind) { const match = ind.fearGreed <= 10 && ind.rsi < 20; return { id: 1901, name: 'Extreme Fear (0-10) + RSI20', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1902(ind) { const match = ind.fearGreed <= 10 && ind.rsi < 25; return { id: 1902, name: 'Extreme Fear (0-10) + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1903(ind) { const match = ind.fearGreed <= 10 && ind.rsi < 28; return { id: 1903, name: 'Extreme Fear (0-10) + RSI28', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1904(ind) { const match = ind.fearGreed <= 10 && ind.rsi < 30; return { id: 1904, name: 'Extreme Fear (0-10) + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1905(ind) { const match = ind.fearGreed <= 10 && ind.rsi < 35; return { id: 1905, name: 'Extreme Fear (0-10) + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** F&G 공포 (10-20) + RSI */
    static strategy1906(ind) { const match = ind.fearGreed > 10 && ind.fearGreed <= 20 && ind.rsi < 20; return { id: 1906, name: 'Fear (10-20) + RSI20', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1907(ind) { const match = ind.fearGreed > 10 && ind.fearGreed <= 20 && ind.rsi < 25; return { id: 1907, name: 'Fear (10-20) + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1908(ind) { const match = ind.fearGreed > 10 && ind.fearGreed <= 20 && ind.rsi < 28; return { id: 1908, name: 'Fear (10-20) + RSI28', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1909(ind) { const match = ind.fearGreed > 10 && ind.fearGreed <= 20 && ind.rsi < 30; return { id: 1909, name: 'Fear (10-20) + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy1910(ind) { const match = ind.fearGreed > 10 && ind.fearGreed <= 20 && ind.rsi < 35; return { id: 1910, name: 'Fear (10-20) + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 77 : 0 }; }
    
    /** F&G 극단??공포 (0-20) + RSI */
    static strategy1911(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 20; return { id: 1911, name: 'Extreme Fear (0-20) + RSI20', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1912(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 25; return { id: 1912, name: 'Extreme Fear (0-20) + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1913(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 28; return { id: 1913, name: 'Extreme Fear (0-20) + RSI28', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1914(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 30; return { id: 1914, name: 'Extreme Fear (0-20) + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1915(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 32; return { id: 1915, name: 'Extreme Fear (0-20) + RSI32', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    static strategy1916(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 35; return { id: 1916, name: 'Extreme Fear (0-20) + RSI35', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    static strategy1917(ind) { const match = ind.fearGreed <= 15 && ind.rsi < 25; return { id: 1917, name: 'Extreme Fear (0-15) + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1918(ind) { const match = ind.fearGreed <= 15 && ind.rsi < 30; return { id: 1918, name: 'Extreme Fear (0-15) + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1919(ind) { const match = ind.fearGreed <= 5 && ind.rsi < 25; return { id: 1919, name: 'Panic Fear (0-5) + RSI25', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1920(ind) { const match = ind.fearGreed <= 5 && ind.rsi < 30; return { id: 1920, name: 'Panic Fear (0-5) + RSI30', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    
    // --- 극단??공포 + MACD 조합 (1921-1940) ---
    
    /** F&G 극단??공포 + MACD Golden */
    static strategy1921(ind) { const match = ind.fearGreed <= 10 && ind.macd?.MACD > ind.macd?.signal; return { id: 1921, name: 'Extreme Fear (0-10) + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1922(ind) { const match = ind.fearGreed <= 15 && ind.macd?.MACD > ind.macd?.signal; return { id: 1922, name: 'Extreme Fear (0-15) + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1923(ind) { const match = ind.fearGreed <= 20 && ind.macd?.MACD > ind.macd?.signal; return { id: 1923, name: 'Extreme Fear (0-20) + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    /** F&G 극단??공포 + MACD Histogram */
    static strategy1924(ind) { const match = ind.fearGreed <= 10 && ind.macd?.histogram > 0; return { id: 1924, name: 'Extreme Fear (0-10) + MACD Hist+', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1925(ind) { const match = ind.fearGreed <= 15 && ind.macd?.histogram > 10; return { id: 1925, name: 'Extreme Fear (0-15) + MACD Hist10', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1926(ind) { const match = ind.fearGreed <= 20 && ind.macd?.histogram > 15; return { id: 1926, name: 'Extreme Fear (0-20) + MACD Hist15', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1927(ind) { const match = ind.fearGreed <= 20 && ind.macd?.histogram > 20; return { id: 1927, name: 'Extreme Fear (0-20) + MACD Hist20', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** F&G 극단??공포 + MACD 0??*/
    static strategy1928(ind) { const match = ind.fearGreed <= 10 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 1928, name: 'Extreme Fear (0-10) + MACD Above0 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1929(ind) { const match = ind.fearGreed <= 15 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 1929, name: 'Extreme Fear (0-15) + MACD Above0 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1930(ind) { const match = ind.fearGreed <= 20 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 1930, name: 'Extreme Fear (0-20) + MACD Above0 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1931(ind) { const match = ind.fearGreed <= 10 && ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 1931, name: 'Extreme Fear (0-10) + MACD Below0 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1932(ind) { const match = ind.fearGreed <= 20 && ind.macd?.MACD < 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 1932, name: 'Extreme Fear (0-20) + MACD Below0 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    
    /** F&G 극단??공포 + MACD Cross/Turn */
    static strategy1933(ind) { const crossZero = ind.macd?.histogram >= 0 && (ind.macd?.prevHistogram || 0) < 0; const match = ind.fearGreed <= 15 && crossZero; return { id: 1933, name: 'Extreme Fear (0-15) + MACD Cross0', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1934(ind) { const crossZero = ind.macd?.histogram >= 0 && (ind.macd?.prevHistogram || 0) < 0; const match = ind.fearGreed <= 20 && crossZero; return { id: 1934, name: 'Extreme Fear (0-20) + MACD Cross0', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1935(ind) { const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = ind.fearGreed <= 15 && histTurn; return { id: 1935, name: 'Extreme Fear (0-15) + MACD Turn Up', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1936(ind) { const histTurn = ind.macd?.histogram > (ind.macd?.prevHistogram || -999); const match = ind.fearGreed <= 20 && histTurn; return { id: 1936, name: 'Extreme Fear (0-20) + MACD Turn Up', direction: 'UP', match: Boolean(match), confidence: match ? 80 : 0 }; }
    
    /** F&G Panic + MACD 강한 ?�호 */
    static strategy1937(ind) { const match = ind.fearGreed <= 5 && ind.macd?.MACD > ind.macd?.signal; return { id: 1937, name: 'Panic Fear (0-5) + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1938(ind) { const match = ind.fearGreed <= 5 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 1938, name: 'Panic Fear (0-5) + MACD Above0 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1939(ind) { const match = ind.fearGreed <= 5 && ind.macd?.histogram > 20; return { id: 1939, name: 'Panic Fear (0-5) + MACD Hist20', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1940(ind) { const match = ind.fearGreed <= 5 && ind.macd?.MACD > 0 && ind.macd?.histogram > 15; return { id: 1940, name: 'Panic Fear (0-5) + MACD Above0 Hist15', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    
    // --- 극단??공포 + BB 조합 (1941-1960) ---
    
    /** F&G 극단??공포 + BB ?�치 */
    static strategy1941(ind) { const match = ind.fearGreed <= 10 && ind.bollingerBands?.position < 10; return { id: 1941, name: 'Extreme Fear (0-10) + BB10', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1942(ind) { const match = ind.fearGreed <= 10 && ind.bollingerBands?.position < 15; return { id: 1942, name: 'Extreme Fear (0-10) + BB15', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1943(ind) { const match = ind.fearGreed <= 10 && ind.bollingerBands?.position < 20; return { id: 1943, name: 'Extreme Fear (0-10) + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1944(ind) { const match = ind.fearGreed <= 15 && ind.bollingerBands?.position < 15; return { id: 1944, name: 'Extreme Fear (0-15) + BB15', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1945(ind) { const match = ind.fearGreed <= 15 && ind.bollingerBands?.position < 20; return { id: 1945, name: 'Extreme Fear (0-15) + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1946(ind) { const match = ind.fearGreed <= 20 && ind.bollingerBands?.position < 15; return { id: 1946, name: 'Extreme Fear (0-20) + BB15', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1947(ind) { const match = ind.fearGreed <= 20 && ind.bollingerBands?.position < 20; return { id: 1947, name: 'Extreme Fear (0-20) + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1948(ind) { const match = ind.fearGreed <= 20 && ind.bollingerBands?.position < 25; return { id: 1948, name: 'Extreme Fear (0-20) + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    /** F&G 극단??공포 + BB 밴드??*/
    static strategy1949(ind) { const match = ind.fearGreed <= 15 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth < 2; return { id: 1949, name: 'Extreme Fear (0-15) + BB20 Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1950(ind) { const match = ind.fearGreed <= 15 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4; return { id: 1950, name: 'Extreme Fear (0-15) + BB20 Normal', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1951(ind) { const match = ind.fearGreed <= 15 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 4; return { id: 1951, name: 'Extreme Fear (0-15) + BB20 Wide', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1952(ind) { const match = ind.fearGreed <= 20 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth < 2; return { id: 1952, name: 'Extreme Fear (0-20) + BB25 Squeeze', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1953(ind) { const match = ind.fearGreed <= 20 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 2 && ind.bollingerBands?.bandwidth < 4; return { id: 1953, name: 'Extreme Fear (0-20) + BB25 Normal', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1954(ind) { const match = ind.fearGreed <= 20 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 4; return { id: 1954, name: 'Extreme Fear (0-20) + BB25 Wide', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** F&G Panic + BB */
    static strategy1955(ind) { const match = ind.fearGreed <= 5 && ind.bollingerBands?.position < 10; return { id: 1955, name: 'Panic Fear (0-5) + BB10', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1956(ind) { const match = ind.fearGreed <= 5 && ind.bollingerBands?.position < 15; return { id: 1956, name: 'Panic Fear (0-5) + BB15', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1957(ind) { const match = ind.fearGreed <= 5 && ind.bollingerBands?.position < 20; return { id: 1957, name: 'Panic Fear (0-5) + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1958(ind) { const match = ind.fearGreed <= 5 && ind.bollingerBands?.position < 15 && ind.bollingerBands?.bandwidth >= 4; return { id: 1958, name: 'Panic Fear (0-5) + BB15 Wide', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1959(ind) { const match = ind.fearGreed <= 5 && ind.bollingerBands?.position < 20 && ind.bollingerBands?.bandwidth >= 3; return { id: 1959, name: 'Panic Fear (0-5) + BB20 Expand', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1960(ind) { const match = ind.fearGreed <= 10 && ind.bollingerBands?.position < 15 && ind.bollingerBands?.bandwidth >= 3; return { id: 1960, name: 'Extreme Fear (0-10) + BB15 Expand', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    // --- 극단??공포 + EMA 조합 (1961-1975) ---
    
    /** F&G 극단??공포 + EMA Golden */
    static strategy1961(ind) { const match = ind.fearGreed <= 10 && ind.ema20 > ind.ema50; return { id: 1961, name: 'Extreme Fear (0-10) + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1962(ind) { const match = ind.fearGreed <= 15 && ind.ema20 > ind.ema50; return { id: 1962, name: 'Extreme Fear (0-15) + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    static strategy1963(ind) { const match = ind.fearGreed <= 20 && ind.ema20 > ind.ema50; return { id: 1963, name: 'Extreme Fear (0-20) + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 79 : 0 }; }
    static strategy1964(ind) { const match = ind.fearGreed <= 10 && ind.sma20 > ind.sma50; return { id: 1964, name: 'Extreme Fear (0-10) + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1965(ind) { const match = ind.fearGreed <= 20 && ind.sma20 > ind.sma50; return { id: 1965, name: 'Extreme Fear (0-20) + SMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 78 : 0 }; }
    
    /** F&G 극단??공포 + Double MA Golden */
    static strategy1966(ind) { const match = ind.fearGreed <= 10 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1966, name: 'Extreme Fear (0-10) + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1967(ind) { const match = ind.fearGreed <= 15 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1967, name: 'Extreme Fear (0-15) + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1968(ind) { const match = ind.fearGreed <= 20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1968, name: 'Extreme Fear (0-20) + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    /** F&G 극단??공포 + EMA Stack */
    static strategy1969(ind) { const match = ind.fearGreed <= 10 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1969, name: 'Extreme Fear (0-10) + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1970(ind) { const match = ind.fearGreed <= 15 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1970, name: 'Extreme Fear (0-15) + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1971(ind) { const match = ind.fearGreed <= 20 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1971, name: 'Extreme Fear (0-20) + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 81 : 0 }; }
    
    /** F&G Panic + EMA */
    static strategy1972(ind) { const match = ind.fearGreed <= 5 && ind.ema20 > ind.ema50; return { id: 1972, name: 'Panic Fear (0-5) + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1973(ind) { const match = ind.fearGreed <= 5 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1973, name: 'Panic Fear (0-5) + Double MA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1974(ind) { const match = ind.fearGreed <= 5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1974, name: 'Panic Fear (0-5) + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1975(ind) { const match = ind.fearGreed <= 5 && ind.close > ind.ema20 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50; return { id: 1975, name: 'Panic Fear (0-5) + Full MA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    
    // --- 극단??공포 + 복합 조합 (1976-2000) ---
    
    /** F&G 극단??공포 + RSI + MACD */
    static strategy1976(ind) { const match = ind.fearGreed <= 15 && ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal; return { id: 1976, name: 'Extreme Fear (0-15) + RSI25 + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1977(ind) { const match = ind.fearGreed <= 15 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 1977, name: 'Extreme Fear (0-15) + RSI30 + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1978(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal; return { id: 1978, name: 'Extreme Fear (0-20) + RSI25 + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1979(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal; return { id: 1979, name: 'Extreme Fear (0-20) + RSI30 + MACD Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1980(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 30 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal; return { id: 1980, name: 'Extreme Fear (0-20) + RSI30 + MACD Above0 Golden', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** F&G 극단??공포 + RSI + BB */
    static strategy1981(ind) { const match = ind.fearGreed <= 15 && ind.rsi < 25 && ind.bollingerBands?.position < 20; return { id: 1981, name: 'Extreme Fear (0-15) + RSI25 + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1982(ind) { const match = ind.fearGreed <= 15 && ind.rsi < 30 && ind.bollingerBands?.position < 25; return { id: 1982, name: 'Extreme Fear (0-15) + RSI30 + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1983(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 25 && ind.bollingerBands?.position < 20; return { id: 1983, name: 'Extreme Fear (0-20) + RSI25 + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    static strategy1984(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 30 && ind.bollingerBands?.position < 25; return { id: 1984, name: 'Extreme Fear (0-20) + RSI30 + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 83 : 0 }; }
    static strategy1985(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 30 && ind.bollingerBands?.position < 25 && ind.bollingerBands?.bandwidth >= 3; return { id: 1985, name: 'Extreme Fear (0-20) + RSI30 + BB25 Expand', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    
    /** F&G 극단??공포 + RSI + EMA */
    static strategy1986(ind) { const match = ind.fearGreed <= 15 && ind.rsi < 25 && ind.ema20 > ind.ema50; return { id: 1986, name: 'Extreme Fear (0-15) + RSI25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 86 : 0 }; }
    static strategy1987(ind) { const match = ind.fearGreed <= 15 && ind.rsi < 30 && ind.ema20 > ind.ema50; return { id: 1987, name: 'Extreme Fear (0-15) + RSI30 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1988(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 25 && ind.ema20 > ind.ema50; return { id: 1988, name: 'Extreme Fear (0-20) + RSI25 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 84 : 0 }; }
    static strategy1989(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 30 && ind.ema20 > ind.ema50; return { id: 1989, name: 'Extreme Fear (0-20) + RSI30 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 82 : 0 }; }
    static strategy1990(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 30 && ind.close > ind.ema20 && ind.ema20 > ind.ema50; return { id: 1990, name: 'Extreme Fear (0-20) + RSI30 + EMA Stack', direction: 'UP', match: Boolean(match), confidence: match ? 85 : 0 }; }
    
    /** F&G 극단??공포 + 3�?복합 */
    static strategy1991(ind) { const match = ind.fearGreed <= 15 && ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20; return { id: 1991, name: 'Extreme Fear + RSI25 + MACD Golden + BB20', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy1992(ind) { const match = ind.fearGreed <= 15 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 1992, name: 'Extreme Fear + RSI30 + MACD Golden + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 89 : 0 }; }
    static strategy1993(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 25 && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1993, name: 'Extreme Fear + RSI25 + BB20 + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 88 : 0 }; }
    static strategy1994(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25; return { id: 1994, name: 'Extreme Fear + RSI30 + MACD Golden + BB25', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    static strategy1995(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.ema20 > ind.ema50; return { id: 1995, name: 'Extreme Fear + RSI30 + MACD Golden + EMA Golden', direction: 'UP', match: Boolean(match), confidence: match ? 87 : 0 }; }
    
    /** F&G 극단??공포 + 4�?복합 */
    static strategy1996(ind) { const match = ind.fearGreed <= 15 && ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1996, name: 'Extreme Fear + RSI25 + MACD + BB20 + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 92 : 0 }; }
    static strategy1997(ind) { const match = ind.fearGreed <= 15 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1997, name: 'Extreme Fear + RSI30 + MACD + BB25 + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1998(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 25 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 20 && ind.ema20 > ind.ema50; return { id: 1998, name: 'Extreme Fear + RSI25 + MACD + BB20 + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 91 : 0 }; }
    static strategy1999(ind) { const match = ind.fearGreed <= 20 && ind.rsi < 30 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 25 && ind.ema20 > ind.ema50; return { id: 1999, name: 'Extreme Fear + RSI30 + MACD + BB25 + EMA', direction: 'UP', match: Boolean(match), confidence: match ? 90 : 0 }; }
    static strategy2000(ind) { const match = ind.fearGreed <= 10 && ind.rsi < 25 && ind.macd?.MACD > 0 && ind.macd?.MACD > ind.macd?.signal && ind.bollingerBands?.position < 15 && ind.ema20 > ind.ema50 && ind.sma20 > ind.sma50 && ind.close > ind.ema20; return { id: 2000, name: 'Ultimate Fear Buy Signal', direction: 'UP', match: Boolean(match), confidence: match ? 95 : 0 }; }

    /** 모든 ?�략 ?�행 (1801-2000) */
    static analyzeAll(indicators) {
        return [
            this.strategy1801(indicators), this.strategy1802(indicators), this.strategy1803(indicators),
            this.strategy1804(indicators), this.strategy1805(indicators), this.strategy1806(indicators),
            this.strategy1807(indicators), this.strategy1808(indicators), this.strategy1809(indicators),
            this.strategy1810(indicators), this.strategy1811(indicators), this.strategy1812(indicators),
            this.strategy1813(indicators), this.strategy1814(indicators), this.strategy1815(indicators),
            this.strategy1816(indicators), this.strategy1817(indicators), this.strategy1818(indicators),
            this.strategy1819(indicators), this.strategy1820(indicators), this.strategy1821(indicators),
            this.strategy1822(indicators), this.strategy1823(indicators), this.strategy1824(indicators),
            this.strategy1825(indicators), this.strategy1826(indicators), this.strategy1827(indicators),
            this.strategy1828(indicators), this.strategy1829(indicators), this.strategy1830(indicators),
            this.strategy1831(indicators), this.strategy1832(indicators), this.strategy1833(indicators),
            this.strategy1834(indicators), this.strategy1835(indicators), this.strategy1836(indicators),
            this.strategy1837(indicators), this.strategy1838(indicators), this.strategy1839(indicators),
            this.strategy1840(indicators), this.strategy1841(indicators), this.strategy1842(indicators),
            this.strategy1843(indicators), this.strategy1844(indicators), this.strategy1845(indicators),
            this.strategy1846(indicators), this.strategy1847(indicators), this.strategy1848(indicators),
            this.strategy1849(indicators), this.strategy1850(indicators), this.strategy1851(indicators),
            this.strategy1852(indicators), this.strategy1853(indicators), this.strategy1854(indicators),
            this.strategy1855(indicators), this.strategy1856(indicators), this.strategy1857(indicators),
            this.strategy1858(indicators), this.strategy1859(indicators), this.strategy1860(indicators),
            this.strategy1861(indicators), this.strategy1862(indicators), this.strategy1863(indicators),
            this.strategy1864(indicators), this.strategy1865(indicators), this.strategy1866(indicators),
            this.strategy1867(indicators), this.strategy1868(indicators), this.strategy1869(indicators),
            this.strategy1870(indicators), this.strategy1871(indicators), this.strategy1872(indicators),
            this.strategy1873(indicators), this.strategy1874(indicators), this.strategy1875(indicators),
            this.strategy1876(indicators), this.strategy1877(indicators), this.strategy1878(indicators),
            this.strategy1879(indicators), this.strategy1880(indicators), this.strategy1881(indicators),
            this.strategy1882(indicators), this.strategy1883(indicators), this.strategy1884(indicators),
            this.strategy1885(indicators), this.strategy1886(indicators), this.strategy1887(indicators),
            this.strategy1888(indicators), this.strategy1889(indicators), this.strategy1890(indicators),
            this.strategy1891(indicators), this.strategy1892(indicators), this.strategy1893(indicators),
            this.strategy1894(indicators), this.strategy1895(indicators), this.strategy1896(indicators),
            this.strategy1897(indicators), this.strategy1898(indicators), this.strategy1899(indicators),
            this.strategy1900(indicators), this.strategy1901(indicators), this.strategy1902(indicators),
            this.strategy1903(indicators), this.strategy1904(indicators), this.strategy1905(indicators),
            this.strategy1906(indicators), this.strategy1907(indicators), this.strategy1908(indicators),
            this.strategy1909(indicators), this.strategy1910(indicators), this.strategy1911(indicators),
            this.strategy1912(indicators), this.strategy1913(indicators), this.strategy1914(indicators),
            this.strategy1915(indicators), this.strategy1916(indicators), this.strategy1917(indicators),
            this.strategy1918(indicators), this.strategy1919(indicators), this.strategy1920(indicators),
            this.strategy1921(indicators), this.strategy1922(indicators), this.strategy1923(indicators),
            this.strategy1924(indicators), this.strategy1925(indicators), this.strategy1926(indicators),
            this.strategy1927(indicators), this.strategy1928(indicators), this.strategy1929(indicators),
            this.strategy1930(indicators), this.strategy1931(indicators), this.strategy1932(indicators),
            this.strategy1933(indicators), this.strategy1934(indicators), this.strategy1935(indicators),
            this.strategy1936(indicators), this.strategy1937(indicators), this.strategy1938(indicators),
            this.strategy1939(indicators), this.strategy1940(indicators), this.strategy1941(indicators),
            this.strategy1942(indicators), this.strategy1943(indicators), this.strategy1944(indicators),
            this.strategy1945(indicators), this.strategy1946(indicators), this.strategy1947(indicators),
            this.strategy1948(indicators), this.strategy1949(indicators), this.strategy1950(indicators),
            this.strategy1951(indicators), this.strategy1952(indicators), this.strategy1953(indicators),
            this.strategy1954(indicators), this.strategy1955(indicators), this.strategy1956(indicators),
            this.strategy1957(indicators), this.strategy1958(indicators), this.strategy1959(indicators),
            this.strategy1960(indicators), this.strategy1961(indicators), this.strategy1962(indicators),
            this.strategy1963(indicators), this.strategy1964(indicators), this.strategy1965(indicators),
            this.strategy1966(indicators), this.strategy1967(indicators), this.strategy1968(indicators),
            this.strategy1969(indicators), this.strategy1970(indicators), this.strategy1971(indicators),
            this.strategy1972(indicators), this.strategy1973(indicators), this.strategy1974(indicators),
            this.strategy1975(indicators), this.strategy1976(indicators), this.strategy1977(indicators),
            this.strategy1978(indicators), this.strategy1979(indicators), this.strategy1980(indicators),
            this.strategy1981(indicators), this.strategy1982(indicators), this.strategy1983(indicators),
            this.strategy1984(indicators), this.strategy1985(indicators), this.strategy1986(indicators),
            this.strategy1987(indicators), this.strategy1988(indicators), this.strategy1989(indicators),
            this.strategy1990(indicators), this.strategy1991(indicators), this.strategy1992(indicators),
            this.strategy1993(indicators), this.strategy1994(indicators), this.strategy1995(indicators),
            this.strategy1996(indicators), this.strategy1997(indicators), this.strategy1998(indicators),
            this.strategy1999(indicators), this.strategy2000(indicators)
        ];
    }
}

