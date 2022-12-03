import { DayThree, Item, Rucksack } from "./day_three";

const sampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const realInput = `FzQrhQpJtJMFzlpplrTWjTnTTrjVsVvvTnTs
mScqSqqgcfPCqGPZcfGNSvTNsVVNSjNvWSNsNz
fPcPGqgCcHgFzQpJJtHtJH
DZDqqlrjplDHrNCmnBcHBMCRcJzb
RQFLStFvdcBbzdJbJM
PThQtwftTPFvtTPhvtFtfFtpZZllwjRNlsqNqqZjwpGlrZ
pPwtqgwJZPJLgQqSFlqhFFlqMd
DBmCWBBDWTRGvcVRTCCnnfQlFSdlzfhfdMWQfjhhQz
drmBVVCRgprPtrZp
HznjQjvmzDMVrQnMLJMMlfWgPSlJGWWJPl
BdcqqhcdBRpFhhZBthhctdJSJJWfgGFlJCSFgbWPCDJS
NdRTZdNqBwqtthpRBTTRqdtZrsLQVzrrzjzDwDsnmrQrnsrr
HZFZCFzZWszqsRTBZTNMhmthVTmhDppmMQVPpm
wjvSbJddvrvlrvnJSJJvlJmhPlhVPVtGVpQDBVMpphQP
frbrfrcvvnvjfwbcJgrrCBRsCFsNzRgRCHCqssRH
dDFNqNqZqPLNqvqTTvCLSPdZssGHClJQJcRHJGHHcHBcsMsQ
lrjmWgWWrhjgrppQHHMQrsQRJGcBJc
lVlmnwjmdTTSvVFN
FWNFHvQPmLGwwwSHtswwln
RfMJcDdfdcfdddfZjdchrtZmSmCZVtqVnZmrnrtC
JMmJcfjjphcghpgjhRGzGzBBGPFGNBvPTpFL
cVPVwStmmcQPBQPpSCppwhHZNNqHszNBhsNRNjqHzj
MfWdDgvdbnvgMTWgvgZfzmsZJHzNhqjqjRhJ
MDWMWGndMgFDnFLDwQrPPCSrCSVrlmGS
QLZmPdRdWmMsMDWZmsLWWrhMHcHGzHvGzFcvrvzNrc
tplSbLVBlvHHcFNnSr
VqfgwLlCJWmWQTfW
nRWvlvRbtLvdMCPFGL
wrfsJNNGhNzGrTgDMDLgPMLPfq
wcVhJQhwhrrBpmVblBRGSG
HHHcggrZLcQQcQll
GzfzTRTzmmFMwSNSwdSJQtNLNB
TGbmLMFTzVVVTMzmFMfFPMHPZhnjZCpHnhgnZnPWCPZZ
MRwwpVMHRspqVqwmccDlDrcHBBZgBl
jQfQQQjWWFBgmcgDfcZg
hvvSQzSnQQSWWQWSjTZVTRMshwVCssppwV
pvrTvCvtFppCHMMZcdDFdcZM
wLjTQnqljjSnlwjqjRgLcHHHMBDMZhBMHgHcbBDh
mqjqlSNqRqwSRrWCvzGmtfTfzs
TWScDCqCQQVBWDqWHsHswwBgRJzRhhHp
dPttGrvFfGjMjnjvshsJgsJLgghRgH
rFMlGdtjPffNnnrffSNcVCDqQqCQRqQRRN
GmBRbVpPbmJcwggBBgWW
LjsTCNNtddjHqLLgWwccqgfq
nsjNjntNtjHCsDwZmwZZVmmGSvSD
bwDDgNFtMMDbFsMbFwWWVcRcSpcgjgQWhWSp
lfTJJlvdfCffccWppRjRlcSc
RnzGdJJmsMNnMFtM
bsBTFsqqTTmFZTsQBWWznWCRshlJNJlCVh
GjGnDvDjvjPppHwwpwgrPPClJhNVRCzhhzJWlWlhNlvJ
ffdgLrgdLrDjdfHPbbZbttcBbcbLmntn
TNTwwvTTHNtTHNLLVqtqTSZBJnrnhhbrFJjZjnVZgghF
cplWfRlzcWfRCZZhFrGjBfjZjn
pddzDsRpDcclzCQMWBvNSmTTSqdvPPvqwqtT
DQTttwwLtQtVSDMJDRmmSS
ffsWfvrBWrPvwJhPhPSMPMVn
WsvsggFvwNLgHtNQ
llBbVDMTlFVdFDTbVggSVsqZqZZZqqvNJZJRNRWgtv
HhpjcHHvjPsqCsWcNcsq
GfpvnPvwFDTTFFDw
GMmFGMGFFgVwQHQwwM
cJtZNtZTbThcZtcZJJtTZWJPllgNgpPvVgpjHvQpRpHQNg
hWcJZcnhcJznbcBZLqSLDfCmHqnqCLsD
zQpjLpnhnsHTnlQLrMCCHPFrvvCMPcHm
ZfgdSBtNqBwlgSDfZDwtqSFvJCvrPrVvFmwCJFvrmmFV
dfbRNZBqDtgRNBNNNljLLjhGRGGWGLGTRhjz
hhrnfBzhtzZgDgDnBfrfDZsRpMNCNNWjwCCfGQGGNGCGQC
lcdPmHLSPDSdFDpQMLjCQQQCRGpN
lJSSbmPdVdVvdHbvSDFHHPlZqgBnttzgTsssTrqgbZbsTT
FsdsShrgggLDdbSDsgrGrlWHTpfRpTjjfFTzRTRjBWWp
mPvqCmJCqJNnPvPNPCvvLTTVjHjzNWHHTWRBRVTWVz
wJLvqPZmJtccncvZmJqqrghDGQwbdSGdsgGgQgQr
zFwtNJGtNFlpnwHccZjZbcpprsmc
PWQfBWhBgQgTWQRLThBqMSVDSbbDRsVDmsmZsSZDjr
fvQfWBfLqfTqhLhCvNFttJlCwGrrCC
fNrGLNrfNrGjllRRRPmWVL
tbJdcFbSSssZSmmpFcsSbwDWVWBlllVPDnnjBFjDRnBF
ZZJcvZctgNmmvMGhQm
HhhjFRhgrcRTFLvWVJVQWJVHDHQJPP
GwCmwBfGzfSCzCfwtmtzzJVWSVJJZrbWQQQqJJDZVJ
mtfzpGdststtBmfmCwrGRFcTcvjngjFnRcLnpLLn
rrwjdwLgVmVwHrfPCJPQBCBGmPtt
ccNZqbNnMMblNpTlNpnhhBPSJsQhJtJtChPJqS
vTWvNcWNWTFvnnvcgjzDLVQLgHVwWDrW
jNPgbNHbfLJgLzfz
ShvhhFVVDShFVqMSSSvZfffvPLtBBBBJJlpfLJJv
DqhnShhMnZZwCSDCMhChrRnNrNdNQbHNNPmjmdHN
VQVZGQFnzFTSsBfgzgfs
rjlpjtDrtMLZPMtPtpPZPwCsgSHgMHCCmCTWsgBWSBmg
pjvDqLwrlDtwqtqNLvtjpPPwRNbQRncQVQddZhRhJQbJncbG
PsBSqnSdQsFhmmmnppFc
TRhNvrTCvNTHVcfHbJVTpc
rhtWvGWLrjRqdSqqLLqdld
vPhfqPJvrMrnffDDhvpMjdzGMLdLLQpllLGQ
mbmcFSScGbSCcQlzwQQlclsg
BSGVCmCTZWCGGvnvfZHqqrDhHN
GSRfrzGRhzsGChjTBBlqBgjgCTCn
wHQwtDVDHwHHDJcDWJZwzHZBqTnnBFlvjFgBqnljjvBdBZ
JNmVJpVmNtDHJWHrbfPLhbGhrzRbpr
WcWcbzNPbDwBNvWBwRMPQmJZQRQZftRZGP
LhVHFgggTHCFHhfMQQSMMGQRMLLM
qnrqppFVHphqfDsNbzjrzbrN
cwgDrdLSrBrvvhDzCljjTW
VHtVZpspQtMQsVRQppFVQVHtCdPTPTzdjvhTzTTPRvjjvWhn
QQZpMdJsQFJHtMHdScwLwLJGrSScSwqw
ZsjNflGfRfRPrZNRFcffLwJdwcLdDBnwzzzDznVn
CTGvhhTqbtbgTqLJWdDntzWWdnLw
phCMgmQGvvHCvMhbTQQFsNsNFPZSfZjffmNsll
CNpCJHLNhhSSHZPgrFlFFWgpFpmzjj
qQttDVDwQGdQGvqDQfwbcVrrlljjzzmzrVJgrr
nvMDsqqqQvfvsqDnRSZHJPPZHhLHLS
RNNrrPfDNRQwQhjscghMqs
WVZlHvnZqtlLVLvwjwhsggTstMhwTw
vGHWLJlVWlmLVqRCGCFFNfqqGf
MNzqCnvqvqvCVLBvvCVCpVcRssncrPSTWGrPSPdGTcrP
hmHwFmQjFlhtZmHwtZjjddSSGcsdPrrGcQQQRGPW
fHbbFjlhZwmtwhfjmmwmmLbpLqzqvBzLzCvLNRMbNB
tQfLrtQPrrfDSSCVlDfLSrmbBjGvWjjLmWWWpWNNppmv
wdHhRTTndnRThdvnBFGpNBMnpvvp
JdqTHTHHRdqzsJRRzTRHscJdDSGCfDlqQZqlfZrZZCffqSSQ
hQMWLsgGJMMhsCHggQWhgspDWFPzZvPvptDvzvmtdtdF
BrBlrTBrNRbfnjNQlZDztPvpmpppmzvfdd
jQlQlqQVbVcsMgMgChhJVs
MtFMCTWRFRRtCRTTRTMGJddjLdstHvBzBHzHVVpL
lZSDnbDlnZPrbHpzJJsdSVJpBL
nNghhPrlZlgDTFhCfMFJRMQF
RGpPFZPRQZPFRGvpPQPpjvpmhnnCMjhmhgBgVgMVWBVgVM
wLtfNdNHmrNthCBgCbhnngWd
srSfwHfszsNmtswlrqQDGQFDRPJGDvzRppRJ
GVFFGvVWZLFsmssFRNfVvmGGJPpJTTqDBvTpqlpDvqbBtTPl
gQhzzChzrMQhjpzlzWzJpPpBJb
ghgWjcCjMgCHWdQMhdjChCmfwmRRGZZGVHLZHRfmNwVs
DnDVhdnrfSfpcGGjQQGdJddJ
bPWPRbRsRMsHNzDqTZcGBcqZqmmN
HvwPvvzMPwDCChDVwS
vTCCvTfWFDTtRPMvfWFlDFHBqGLpLzbwBgWwqzGqbBbB
cQcSNchSJSZShVJNnZrhSqBpgwGHHtGwqtbwLbqpbr
JNnJVsJscNstNhQsjnVVNlFfMmTMFfCTfjFvfPRPPF
VLFBsgffNFNqRvbz
ChltjTdjDhHpHZvdpjjZhwCpbNrbSzzbrNGMTMMNSMbWWNSN
vQjpttQhHnLsBQVLsQ
mbzQgTzRVVbsVdQgzzVRddmztFGWNGNNWnGtFSGBsrCNWCrC
jfJjvPPwLDcHDPvDDPDppLCWCFBGWntCBnrtFcrFWTGn
wpJPLjvpTTDpwhfgzmVMbqhdhVRgzl
PlcqbWClLmnqZVLq
THwdrrhddhhfJJhwLJhpQnDVnznnmZQQnSpfpD
vrFdvGsGHhhhwHjFGrFGJHdMCCcNgbWMPccRRccMFLNPPP
tbppJqcNtJnZzRJbPFsFPHfZrrshFDjj
GdwgwlLgGCndsDFrhDHHFF
SSlLnmmvqWNqmcqb
ZPFPPTZpZSWzCMMSzPBsFvhtlQvJQQtJhsVs
dmNbmgbrwDNmbcDgwNdcwdLsnhlJlnvtsBJnhVQqqnstLB
bNGfDGgHHVwbwNwVfgmRMzCzzCSHjSRZSZCTRS
dDTffQdqQQLBLnVLLQvL
rrBHZZcgJcrLvNLtLgRLbN
cjjJhrFlhZwFFzwJzmTBBdmTsDPzDsBP
ClGrJJMNCrGQqlcPvWgnDP
ZBvbjHpSwBVVVcWjjjqQ
BLSbbwsHSTBHwmLHHLbBsSTFdrfvCrtmdzfGJzrdzGJddGfh
gljWRwmSjtJWjJtJjgjSZfVSTVVHGZSVHcVchZ
pBzLFQpPsFBGcGBTThfB
pFpQzFLPLpvQFQnLbsqqGddgjbmwRldwtWmlGWwj
PDQDMFQBMfWPvjdLLndLjrmsMj
qZqVzTRRqHtvZGGtVqTTzVjLLsrmJCddnLjrjHsrhdCr
GzwcZtqNzqvNqwzZVGRwSzbpWfFbWPlWFpNDBfQfFNNf
dfRszdzVdsjwdhLwCCqwGllHvPGPwG
SpJtBLFgcGqHQClqZF
JrttrtcTmSSLrmtBTrNgnBJjbNhhbhzRdsVdMhNjhMMhVd
MPFSCfSMqVSBGrtzlvccfQctzbzl
hZNjTHWWTZwshbLvmlWpBzmbmm
dRTTJNDNhjsJqBBMMgrJPVVr
WnVzDMjlDVWwwHgwhmgNhNNsJh
qfvrLNCcbLdvpcvbrPPqCsGhSJGTTBspTshBpTBBms
ZLvvZfrPfPCLbCFFzjVQzRnNNMVzDQ
nllbFTTpTFTBcnCjQPqQdZRQZhCb
tvWszrrztvSmzQQvrDmZRjjjPPDVqPRdZRdCPd
gfzvSsftgQHQHgQl
GVbHRRGRLpdmGWTm
gSPPltPlrlvccFccPlcJNCTpnnmpMCLMMmWfdRmMSS
FzNJRhhvPFRvQwzqjqzBHZZj
PhZSpFBPBFsNmjBVllltBj
JMGLnrrnbfffrdqRqPHnnqLDVTDDjgmRgwtmjDljlDVlwl
LHMqPqPnnqGLWJPMnndrGfSWppzvvFSChFFFvvzQSQZz
RSWWssbvnnCqZnWsRCnssWrTggNhgbNHBgQjhhQBgjNT
mcpzcppzczcDGVcPcDLLGLjmrMNTNtQNHhMHrQBQNTgN
LVpPfcjjWvsFFnFf
MpddpdCpJdJlbdMvBHMnnsHqSRvG
PWvZfFmZrrfmwWwFznBnqRRSGcsBVmVBRG
zjzzhQPQvzjLPQzwffrwrtlTCDtJDlgJLltpTTJlTl
TvTWjjzpznGttFFZccrrPrSZllcB
gNNSqHMqsMHQJHNZCDDCZDqLZdlZBD
SMQNSRNbRRHwhwhsRmtnvWVmmnbGnjmpGn
ccSVQjCQddTsFJcH
gLppBfgfmvCRFdsddTJJgb
WMLMmWGGBZWZLCtvDhlSSDGlwhSPSzSP
TpqVGVHFQGmqSqPZdccNCzzhdwCjNG
fffbbvftMrBMDDcCccCZCjlvhCCd
RLWMnbftDhnMRtfBftRJMtLMgFgHmmpmPmSmmQFPPLHHVTQS
nRvwQSDNcpVJJcJR
qZMjBhjhZMMBzLBGLGrjJbTPVTpbdPPdVbVb
ZZpmFFZlfGqfmmGMzlfmMmnWQDtHtSvnWWNSHSSstFtS
bFDGZjGDbbRSgLtN
CphJVfJWCTBgvfLHNRcwnt
WVhPWBTzzChzhhhBmrpPPCJZDQtdMlrjFQdrFqsjdrQsFG
ZBpVQHHVMMWWdmmLWw
lQhhrjcRttrqbvQLNwdDWzmNSDmStz
QbGqhcbvcsqvCCHnsCZHCnTn
tlWtQTTTJjTQtVnmrbnPWVShVC
MDMGGzsHcwFgGZBqrmmPSnbqVmNVGC
sZFPwHcMZDBRTlvQQJttTQTR
FhVRfGptMGMnZhRFBNRBCCNHHNvTNTRC
zmwrLLSjrbzmNlcvvrHvDPCN
JLwjQdSbjdbSdqJQFGVqFVMgnGHMfGVV
fffZWrJqZSHWTWHqSvrgDhggzRjttsDhpDgs
PGlBLcBBbnnbLLFbGLBjRgjFTFVzshtzpgsppz
TGCPnMPQlGnPmclPlnnQmbmHJvNvfHdqwddwvvZfCNHCfW
ClLwpspTPrTFZCdzFbZdbQ
RRMWfRgWVRMRQBZZScVczVGFbjNb
MfnvMqWmslvDhQPw
hdndSdqsTddBhdcmmNHFDcqHttPF
JjMzzMZQGwZGZJzMzZJQzGJFvPvNPtFmvmNmDvcFtvDHMv
gZwzQwJfGVJQJbGLBsSTSTdTbCWDBSnd
ZZCHZRzMZGRMhMMVVFNThrdd
SgsccSPmmgqssSlqsgcmscSqlhpFdVThjphNrdrhjdwdhFJN
vmttqTcqvLqqmPccmqSBbRWnWzQZZZZBHnQCzHDH
GgPnGdSPBpGsLTBL
rVNJjmwZqtZZshltFTtvRFsL
mqmWrZVqWjrqZMNwPMQQbsddgdsbsgPz
LZLVvjZrggHLJggSZDgrnPnQnRnppVRllntRdPFz
chMCzbqGmhNhhbBCMBdFnpfqFnltRRQnlPpQ
TChmWcMMTmBswJzZZrWrvzgg
gngRNBNRBsNFFBgfgbLLLnqdSLvLTcbLbd
GWtlChlVMllcZSDWSLbdZL
lljjGlhMGrGJpsFdRJfsfzfz
jVTdrnGQcQtTTTFQqBqsgHHFgsqf
ZZLbPLzDzPZCmsgqsBHt
wDzDlPblRDPLPvhvwtdnnhdrnrMGWMVGMThj
spjjpjvjpjmQjrpCMfSlfzrPBl
dHFntHWnnbRVFtnbcqHFzBCCCPzfPMlcCSlgllzc
RLbVWHnnSWtnHFbdbVRdNNtQsjsQTjDLwmGTmTssQwmLGJ
JbJJSLMhRMSLhNqqwFDwFNcFqL
GcpnGnznnpzpzGpffNTNTwTfwdDNNdTFdD
nllnlPGWQWHcGpzzQGGzGvHGJbVVtJSChQVbmtmVJrmrmbRm
GFsFrzwrflmtdtbltG
ggLPDngCJncNLJRDwgnllmJqjWMjhjhjWWmWjj
nBNRNPgpRgDLTgNwfsSHVBQHVHwsZr
WwvnvWvcFtwtSFSF
zBZZZRQSzMBSgSVJGjGTPTGFzCzmmj
fZDrpZZfRfMgSQDDBhgQghDHsnbrcNlWnnLWHLrHsWnllc
ZVncdPPwVPdhZngnqHWHNNvTHvlMvn
fSLjjLSGGBjTTHqvBqrMNT
RSSSDGRtSGZthTTctmtg
rtzrfJbgJHRfGRZLPR
hdVhlllmFlFPLwHmsRGGZP
nTWhRjTBTWlvNQgnJSSbrJtz
JgVTpBpfvgpTDDJFJvTgggtlFlNNMRLNNzNNZRNHMRCLlF
wbPWcSGbGqWDlnNWMMMCLMWZ
wrsGcbrcbcqwDwbcmGvQBQgTTsdVJgJsVdQf
mztrhgJtDrhgcrZmnhbnzbhcMTMPlBCPBGVGTMVGslCCPGDs
FLRQmjjFSQpQwLlPsMsCpvslvPCB
fNLLwSdSwWSWjwmrtczZhhrJzdzh
HHwCwJFmHZttZCfCSffSMHcVDMcPBRPcPRDhPghM
nvQLsTnLslnLvpzGTssnsRPDMhPgVPVgtcVMRPgVQQ
vnsTGWlTLsWTLLvNsGWlsZrwmZCJddjFmtJJNZFftj
hbjSTvSJTfcSwcPSPfTbfHszVVFpGnpJpsHFnHVVls
rtZrcQrRZZQrmZBQlCGppnppHzpVFCGR
WmLqmgNtcLNQWTbPvfPwbbdb
HzZgsdHglHlzdHsFtsNNJSlNcSpjcjlrrNVv
wqqWRPPqwmbcqPjQVvSPJJrVpv
qqBBqmWRhqRLqcBnhzzztgnTdDHnHsFsHn
rJPFVwwsrJwmdVrLWJvvRBWBvbzWlb
nDZcNGNpjTpHncvpZCDnTNZGhlWzQhWbpRRQlQhpWWSWLlQb
CDNntnCCHnvmqPfwtFdVqd
gqBwgBjCswwgqNBNCVDDTVdhlSDTDcZc
HvRRFMzRRRRMpHrtTllfhZHHSShHTf
PmlGLPrppMrrmFFmLMWRjbsjnsjwQNJWnbQjWgBN
pDggpFgRghZjBFPPnPPFrt
cwTfLwBVwCWbLcVTVVvrdndGjMHrnGJtnttdMC
NTVcWNvcBSpgNqspRQlN
DLDgFlDmNZfjfnJZSF
tctvttzvGGzvrHqtVVdwnJGSSnnjjZdWTdwW
zvpcrbpHpqJJsPbPlLlhmhglPQ
pvHHvssFCFZQNCftttdQdd
VgTGTTVGgLjDjlLGzgPVMTNwmcwQmMQfQtmdcmwMJwNm
TPjTDjfGWTLLljgzrWpZZbsqrFqhqbps
ppVLcfcwSLgpSLVLgWwtfshDNDqvWvGvlQZvDNHQHjqq
MPrzmdRrPPrCJFnMnMRRFRPdqqZQNQvjvZDGDlHhQvGNDG
BmBMBBJTMmPBJMMFCCFJRmrsTlVpVbpwLSVwLsgcwTVlVc
SSGzmFRzmRGLgSSmGMJFnvfvJnJVnJQnMl
cBpjHtjwNfcpNZtppHtCMlMPMlJBVlVQlvJPvJ
dNtNZwqWfqtqZWtHttsqHqrRrrdRTLbmmzSLmTGGmbrg
RrrddnrgnRbbgWdGrfnwgQwjDjDpvTpBQTwBPP
MHCStZJzSwvPjWQD
mcJWVHCCLcGLbdcn
PlMsdjPdGMjdPSrSjgddbLbmHHTszHZzpHmsTFvmpzZzmN
ntRJQVRfcQhcQWhnchBJWntTFTTTNTSpFtztmZFDTpDZ
hQfcfCBSwCccVJhSJnrPPGLqPlbPLCrqldgb
vgvWDMZvGpcqgqsP
tSdtjLHLQLHjdFdDddQSQhwlsGqwQlqqqhQsPhGc
tbRjtTLFRvTZDBrMrV`;

const getItems = (index: number) => {
  return sampleInput
    .split("\n")
    [index].split("")
    .map((letter) => new Item(letter));
};

describe("Day Three", () => {
  describe("Part 1", () => {
    it("returns the duplicated item", () => {
      const rucksack1 = new Rucksack(getItems(0));
      const rucksack2 = new Rucksack(getItems(1));
      const rucksack3 = new Rucksack(getItems(2));
      const rucksack4 = new Rucksack(getItems(3));
      const rucksack5 = new Rucksack(getItems(4));
      const rucksack6 = new Rucksack(getItems(5));

      expect(
        DayThree.getDuplicatedItem(
          rucksack1.compartment1(),
          rucksack1.compartment2()
        ).value
      ).toEqual("p");

      expect(
        DayThree.getDuplicatedItem(
          rucksack2.compartment1(),
          rucksack2.compartment2()
        ).value
      ).toEqual("L");

      expect(
        DayThree.getDuplicatedItem(
          rucksack3.compartment1(),
          rucksack3.compartment2()
        ).value
      ).toEqual("P");

      expect(
        DayThree.getDuplicatedItem(
          rucksack4.compartment1(),
          rucksack4.compartment2()
        ).value
      ).toEqual("v");

      expect(
        DayThree.getDuplicatedItem(
          rucksack5.compartment1(),
          rucksack5.compartment2()
        ).value
      ).toEqual("t");

      expect(
        DayThree.getDuplicatedItem(
          rucksack6.compartment1(),
          rucksack6.compartment2()
        ).value
      ).toEqual("s");
    });

    it("returns the right priority", () => {
      expect(new Item("a").getPriority()).toEqual(1);
      expect(new Item("j").getPriority()).toEqual(10);
      expect(new Item("y").getPriority()).toEqual(25);
      expect(new Item("z").getPriority()).toEqual(26);
      expect(new Item("A").getPriority()).toEqual(27);
      expect(new Item("J").getPriority()).toEqual(36);
      expect(new Item("Y").getPriority()).toEqual(51);
      expect(new Item("Z").getPriority()).toEqual(52);
    });

    it("returns the right output", () => {
      expect(new DayThree(realInput).partOne()).toEqual(7908);
    });
  });

  describe("Part 2", () => {
    it("returns the right output", () => {
      expect(new DayThree(realInput).partTwo()).toEqual(2838);
    });
  });
});
